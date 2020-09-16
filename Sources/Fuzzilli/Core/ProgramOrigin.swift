// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Foundation

// Enum to identify the origin of a Program.
public enum ProgramOrigin {
    // The program was generated by this instance.
    case local
    
    // The program is part of a corpus that is being imported.
    case corpusImport(shouldMinimize: Bool)
    
    // The program was sent by a worker instance, identified by the UUID
    // Note: the UUID identifies the sending instance, which is not
    // necessarily the intance that originally generated the program.
    case worker(id: UUID)
    
    // The program was sent by our master instance.
    // As above, this does not necessarily mean that the master generated
    // this program, just that it was received from it. For example, it is
    // possible that another worker generated the program, sent it to the
    // master, and the master then sent it to us. In this case, the origin
    // would also be .master.
    case master
    
    /// Whether a program with this origin still requires minimization or not.
    public func requiresMinimization() -> Bool {
        switch self {
        case .local:
            return true
        case .corpusImport(let shouldMinimize):
            return shouldMinimize
        case .worker, .master:
            return false
        }
    }
}
