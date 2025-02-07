import Foundation

public class PoC: ComponentBase, Collection {
    /// PoC 데이터의 최소 개수 (삭제 시 최소 개수 유지)
    private let minSize: Int

    /// 최대 저장 가능한 PoC 개수
    private let maxSize: Int

    /// 저장된 PoC 리스트
    private var pocPrograms: RingBuffer<Program>

    /// 현재 저장된 PoC 개수
    public var size: Int {
        return pocPrograms.count
    }

    /// PoC가 비어있는지 확인
    public var isEmpty: Bool {
        return size == 0
    }

    /// PoC 개수 제한을 설정하여 초기화
    public init(minSize: Int, maxSize: Int) {
        assert(minSize >= 1)
        assert(maxSize >= minSize)

        self.minSize = minSize
        self.maxSize = maxSize
        self.pocPrograms = RingBuffer(maxSize: maxSize)

        super.init(name: "PoC")
    }

    /// 새로운 PoC 추가
    public func addPoC(_ program: Program) {
        if program.size > 0 {
            pocPrograms.append(program)
            logger.info("Added new PoC. Total PoCs: \(pocPrograms.count)")
        }
    }

    /// PoC에서 랜덤한 프로그램 가져오기
    public func getRandomPoC() -> Program? {
        return pocPrograms.randomElement()
    }

    /// 모든 PoC 프로그램 가져오기
    public func allPoCs() -> [Program] {
        return Array(pocPrograms)
    }

    /// PoC 삭제 (최소 개수 유지)
    public func cleanup() {
        var newPoCs = RingBuffer<Program>(maxSize: maxSize)

        for i in 0..<pocPrograms.count {
            let remaining = pocPrograms.count - i
            if remaining <= (minSize - newPoCs.count) {
                newPoCs.append(pocPrograms[i])
            }
        }

        logger.info("PoC cleanup finished: \(self.pocPrograms.count) -> \(newPoCs.count)")
        pocPrograms = newPoCs
    }


    public var startIndex: Int {
        return pocPrograms.startIndex
    }

    public var endIndex: Int {
        return pocPrograms.endIndex
    }

    public subscript(index: Int) -> Program {
        return pocPrograms[index]
    }

    public func index(after i: Int) -> Int {
        return i + 1
    }
}
