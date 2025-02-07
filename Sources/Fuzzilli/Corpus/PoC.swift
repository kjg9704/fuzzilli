import Foundation

public class PoC: ComponentBase, Collection {
    private let minSize: Int

    private let maxSize: Int

    private var pocPrograms: RingBuffer<Program>

    public var size: Int {
        return pocPrograms.count
    }

    public var isEmpty: Bool {
        return size == 0
    }

    public init(minSize: Int, maxSize: Int) {
        assert(minSize >= 1)
        assert(maxSize >= minSize)

        self.minSize = minSize
        self.maxSize = maxSize
        self.pocPrograms = RingBuffer(maxSize: maxSize)

        super.init(name: "PoC")
    }

    public func addPoC(_ program: Program) {
        if program.size > 0 {
            pocPrograms.append(program)
        }
    }

    public func getRandomPoC() -> Program? {
        return pocPrograms.randomElement()
    }

    public func allPoCs() -> [Program] {
        return Array(pocPrograms)
    }

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
