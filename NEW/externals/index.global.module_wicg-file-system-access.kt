@file:JsQualifier("global")
@file:Suppress("INTERFACE_WITH_SUPERCLASS", "OVERRIDING_FINAL_MEMBER", "RETURN_TYPE_MISMATCH_ON_OVERRIDE", "CONFLICTING_OVERLOADS")
package global

import kotlin.js.*
import org.khronos.webgl.*
import org.w3c.dom.*
import org.w3c.dom.events.*
import org.w3c.dom.parsing.*
import org.w3c.dom.svg.*
import org.w3c.dom.url.*
import org.w3c.fetch.*
import org.w3c.files.*
import org.w3c.notifications.*
import org.w3c.performance.*
import org.w3c.workers.*
import org.w3c.xhr.*
import tsstdlib.Record
import tsstdlib.PermissionDescriptor
import tsstdlib.WritableStream__0
import BaseFileSystemHandle

external interface FilePickerAcceptType {
    var description: String?
        get() = definedExternally
        set(value) = definedExternally
    var accept: Record<String, dynamic /* String | Array<String> */>
}

external interface FilePickerOptions {
    var types: Array<FilePickerAcceptType>?
        get() = definedExternally
        set(value) = definedExternally
    var excludeAcceptAllOption: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external interface OpenFilePickerOptions : FilePickerOptions {
    var multiple: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external interface SaveFilePickerOptions : FilePickerOptions

external interface DirectoryPickerOptions

external interface FileSystemPermissionDescriptor : PermissionDescriptor {
    var handle: dynamic /* FileSystemFileHandle | FileSystemDirectoryHandle */
        get() = definedExternally
        set(value) = definedExternally
    var mode: String? /* "read" | "readwrite" */
        get() = definedExternally
        set(value) = definedExternally
}

external interface FileSystemHandlePermissionDescriptor {
    var writable: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var mode: String? /* "read" | "readwrite" */
        get() = definedExternally
        set(value) = definedExternally
}

external interface FileSystemCreateWritableOptions {
    var keepExistingData: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external interface FileSystemGetFileOptions {
    var create: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external interface FileSystemGetDirectoryOptions {
    var create: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external interface FileSystemRemoveOptions {
    var recursive: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external interface `T$0` {
    var type: String /* "write" */
    var position: Number?
        get() = definedExternally
        set(value) = definedExternally
    var data: dynamic /* ArrayBufferView | ArrayBuffer | Blob | String */
        get() = definedExternally
        set(value) = definedExternally
}

external interface `T$1` {
    var type: String /* "seek" */
    var position: Number
}

external interface `T$2` {
    var type: String /* "truncate" */
    var size: Number
}

external open class FileSystemWritableFileStream : WritableStream__0 {
    open fun write(data: ArrayBufferView): Promise<Unit>
    open fun write(data: ArrayBuffer): Promise<Unit>
    open fun write(data: Blob): Promise<Unit>
    open fun write(data: String): Promise<Unit>
    open fun write(data: `T$0`): Promise<Unit>
    open fun write(data: `T$1`): Promise<Unit>
    open fun write(data: `T$2`): Promise<Unit>
    open fun seek(position: Number): Promise<Unit>
    open fun truncate(size: Number): Promise<Unit>
}

external var FileSystemHandle: Any

external open class FileSystemFileHandle : FileSystemHandle {
    open var kind: String /* "file" */
    open fun getFile(): Promise<File>
    open fun createWritable(options: FileSystemCreateWritableOptions = definedExternally): Promise<FileSystemWritableFileStream>
}

external open class FileSystemDirectoryHandle : BaseFileSystemHandle {
    open var getFile: Any
    open var getDirectory: Any
    open var getEntries: Any
    override var kind: String /* "directory" */
    open fun getFileHandle(name: String, options: FileSystemGetFileOptions = definedExternally): Promise<FileSystemFileHandle>
    open fun getDirectoryHandle(name: String, options: FileSystemGetDirectoryOptions = definedExternally): Promise<FileSystemDirectoryHandle>
    open fun removeEntry(name: String, options: FileSystemRemoveOptions = definedExternally): Promise<Unit>
    open fun resolve(possibleDescendant: FileSystemFileHandle): Promise<Array<String>?>
    open fun resolve(possibleDescendant: FileSystemDirectoryHandle): Promise<Array<String>?>
    open fun keys(): AsyncIterableIterator<String>
    open fun values(): AsyncIterableIterator<dynamic /* FileSystemFileHandle | FileSystemDirectoryHandle */>
    open fun entries(): AsyncIterableIterator<dynamic /* JsTuple<String, dynamic> */>

    companion object {
        fun getSystemDirectory(options: GetSystemDirectoryOptions): Promise<FileSystemDirectoryHandle>
    }
}

external interface `T$3` {
    var multiple: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external fun showOpenFilePicker(options: OpenFilePickerOptions /* OpenFilePickerOptions & `T$3` */ = definedExternally): dynamic /* Promise | Promise */

external fun showOpenFilePicker(): dynamic /* Promise | Promise */

external fun showSaveFilePicker(options: SaveFilePickerOptions = definedExternally): Promise<FileSystemFileHandle>

external fun showDirectoryPicker(options: DirectoryPickerOptions = definedExternally): Promise<FileSystemDirectoryHandle>

external interface ChooseFileSystemEntriesOptionsAccepts {
    var description: String?
        get() = definedExternally
        set(value) = definedExternally
    var mimeTypes: Array<String>?
        get() = definedExternally
        set(value) = definedExternally
    var extensions: Array<String>?
        get() = definedExternally
        set(value) = definedExternally
}

external interface ChooseFileSystemEntriesFileOptions {
    var accepts: Array<ChooseFileSystemEntriesOptionsAccepts>?
        get() = definedExternally
        set(value) = definedExternally
    var excludeAcceptAllOption: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external interface `T$4` {
    var type: String? /* "open-file" */
        get() = definedExternally
        set(value) = definedExternally
    var multiple: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external fun chooseFileSystemEntries(options: ChooseFileSystemEntriesFileOptions /* ChooseFileSystemEntriesFileOptions & `T$4` | ChooseFileSystemEntriesFileOptions & `T$5` | ChooseFileSystemEntriesFileOptions & `T$6` */ = definedExternally): dynamic /* Promise */

external fun chooseFileSystemEntries(): Promise<FileSystemFileHandle>

external interface `T$5` {
    var type: String? /* "open-file" */
        get() = definedExternally
        set(value) = definedExternally
    var multiple: Boolean
}

external interface `T$6` {
    var type: String /* "save-file" */
}

external interface `T$7` {
    var type: String /* "open-directory" */
}

external fun chooseFileSystemEntries(options: `T$7`): Promise<FileSystemDirectoryHandle>

external interface GetSystemDirectoryOptions {
    var type: String /* "sandbox" */
}