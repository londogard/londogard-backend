package com.londogard.wedding

import kotlinx.serialization.Serializable

@Serializable
data class ContactEntry(
    val name: String,
    val telephone: String? = null,
    val email: String? = null,
    val address: String? = null
)

@Serializable
data class ContactWrapper(val title: String = "", val entries: List<ContactEntry> = emptyList())

@Serializable
data class Contacts(val entries: List<ContactWrapper> = emptyList())

@Serializable
data class TimelineElement(val title: String, val description: String, val time: String, val timelineid: Long? = null)

@Serializable
data class Information(val content: String, val date: String, val timeline: List<TimelineElement> = emptyList())

@Serializable
data class RsvpGuest(val name: String, val isComing: Boolean = false)

@Serializable
data class Guest(
    val userid: Long = -1L, val guestid: Long = -1L, val rsvps: List<RsvpGuest> = emptyList(),
    val extra: Map<String, Boolean>? = null, val comment: String? = null
)

@Serializable
data class Gift(
    val title: String, val description: String, val img: String? = null,
    val links: List<String> = emptyList(), val checked: Boolean = false,
    val checkable: Boolean = true, val giftId: Long = -1L
)

@Serializable
data class GifteryList(val title: String, val description: String, val gifts: List<Gift> = emptyList())

@Serializable
data class Data(val contact: Contacts, val information: Information, val guests: List<Guest>, val gift: GifteryList, val weddingId: Long)