@file:Suppress("INTERFACE_WITH_SUPERCLASS", "OVERRIDING_FINAL_MEMBER", "RETURN_TYPE_MISMATCH_ON_OVERRIDE", "CONFLICTING_OVERLOADS")

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
import global.FileSystemFileHandle
import global.FileSystemDirectoryHandle
import global.FileSystemHandlePermissionDescriptor

external open class BaseFileSystemHandle {
    open var kind: String /* "file" | "directory" */
    open var name: String
    open fun isSameEntry(other: FileSystemFileHandle): Promise<Boolean>
    open fun isSameEntry(other: FileSystemDirectoryHandle): Promise<Boolean>
    open fun queryPermission(descriptor: FileSystemHandlePermissionDescriptor = definedExternally): Promise<String /* "denied" | "granted" | "prompt" */>
    open fun requestPermission(descriptor: FileSystemHandlePermissionDescriptor = definedExternally): Promise<String /* "denied" | "granted" | "prompt" */>
    open var isFile: Any
    open var isDirectory: Any
}