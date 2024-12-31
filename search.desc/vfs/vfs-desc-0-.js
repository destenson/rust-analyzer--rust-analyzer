searchState.loadedDescShard("vfs", 0, "Virtual File System\nWrapper around an absolute <code>Utf8Path</code>.\nA <code>Utf8PathBuf</code> that is guaranteed to be absolute.\nPath relative to a file.\nPath relative to a file.\nKind of file change.\nKind of file change.\nChanged file in the <code>Vfs</code>.\nThe file was (re-)created\nThe file was (re-)created\nThe file was deleted\nThe file was deleted\nThe file is deleted.\nThe file exists with the given content hash.\nHandle to a file in <code>Vfs</code>\nThe file was modified\nThe file was modified\nStorage for all file changes and the file id to path …\nPath in <code>Vfs</code>.\nEquivalent of <code>Utf8Path::join</code> for <code>AbsPath</code> with an …\nFile that this path is relative to.\nFile that this path is relative to.\nCoerces to an <code>AbsPath</code> slice.\nReturns the <code>AbsPath</code> representation of <code>self</code> if <code>self</code> is on …\nWrap the given absolute path in <code>AbsPathBuf</code>\nWrap the given absolute path in <code>AbsPath</code>\nWrap the given absolute path in <code>AbsPathBuf</code>\nKind of change\nProvides a panic-less way to verify file_id validity.\nReturns <code>true</code> if the change is not <code>Delete</code>.\nId of the given path if it exists in the <code>Vfs</code> and is not …\nId of the changed file\nFile path corresponding to the given <code>file_id</code>.\nPartitions a list of files into disjoint subsets.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the change is <code>Create</code>.\nReturns <code>true</code> if the change is <code>Create</code> or <code>Delete</code>.\nReturns <code>true</code> if the change is <code>Modify</code>.\nReturns an iterator over the stored ids and their …\nEquivalent of <code>Utf8Path::join</code> for <code>AbsPath</code>.\nCreates a new <code>VfsPath</code> with <code>path</code> adjoined to <code>self</code>.\nDynamically compatible interface for file watching and …\nReturns <code>self</code>’s base name and file extension.\nCreate a path from string. Input should be a string …\nCreates an “in-memory” path from <code>/</code>-separated string.\nNormalize the given path:\nEquivalent of <code>Utf8Path::parent</code> for <code>AbsPath</code>.\nReturns the <code>VfsPath</code> without its final component, if there …\nPath relative to <code>anchor</code>’s containing directory.\nPath relative to <code>anchor</code>’s containing directory.\nEquivalent of <code>Utf8PathBuf::pop</code> for <code>AbsPathBuf</code>.\nRemove the last component of <code>self</code> if there is one.\nEquivalent of <code>PathBuf::push</code> for <code>AbsPathBuf</code>.\nUpdate the <code>path</code> with the given <code>contents</code>. <code>None</code> means the …\nReturns <code>true</code> if <code>other</code> is a prefix of <code>self</code>.\nEquivalent of <code>Utf8Path::strip_prefix</code> for <code>AbsPath</code>.\nDrain and returns all the changes in the <code>Vfs</code>.\nEquivalent of <code>Utf8Path::to_path_buf</code> for <code>AbsPath</code>.\nA set of <code>VfsPath</code>s identified by <code>FileId</code>s.\nThis contains path prefixes to partition a <code>Vfs</code> into <code>FileSet</code>…\nBuilder for <code>FileSetConfig</code>.\nAdd a new set of paths prefixes.\nBuild the <code>FileSetConfig</code>.\nReturns a builder for <code>FileSetConfig</code>.\nGet the id corresponding to <code>path</code> if it exists in the set.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nInsert the <code>file_id, path</code> pair into the set.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIterate over this set’s ids.\nReturns the number of stored paths.\nReturns the number of sets currently held.\nPartition <code>vfs</code> into <code>FileSet</code>s.\nGet the path corresponding to <code>file</code> if it exists in the set.\nGet the id of the file corresponding to <code>path</code>.\nGet the lexicographically ordered vector of the underlying …\nThe handle loaded the following files’ content.\n<code>Handle</code>’s configuration.\nSpecifies a set of files on the file system.\nThe <code>Entry</code> is represented by <code>Directories</code>.\nA set of files on the file system.\nThe <code>Entry</code> is represented by a raw set of files.\nInterface for reading and watching files.\nThe handle loaded the following files’ content for the …\nMessage about an action taken by a <code>Handle</code>.\nIndicate a gradual progress.\nType that will receive <code>Messages</code> from a <code>Handle</code>.\nReturns:\nReturns <code>true</code> if <code>path</code> is included in <code>self</code>.\nReturns <code>true</code> if <code>path</code> is included in <code>self</code>.\nReturns <code>true</code> if <code>path</code> is included in <code>self</code>.\nReturns <code>true</code> if <code>path</code> is included in <code>self</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe file’s content at <code>path</code> has been modified, and should …\nSet of initially loaded files.\nLoad the content of the given file, returning <code>None</code> if it …\nReturns:\nReturns:\nSet this handle’s configuration.\nSpawn a new handle with the given <code>sender</code>.\nVersion number to associate progress updates to the right …\nIndex of watched entries in <code>load</code>.\nThe <code>Config</code> version.\nThe dir being loaded, <code>None</code> if its for a file.\nThe files that have been loaded successfully.\nThe total files to be loaded.")