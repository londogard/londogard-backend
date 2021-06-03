package com.londogard.wedding

import de.nielsfalk.ktor.swagger.version.shared.Group
import io.ktor.locations.*

@KtorExperimentalLocationsAPI
@Group("Wedding Information Operations")
@Location("/wedding")
class WeddingStart

@KtorExperimentalLocationsAPI
@Group("Wedding Information Operations")
@Location("/wedding/create")
class WeddingCreate

@KtorExperimentalLocationsAPI
@Group("Wedding Information Operations")
@Location("/wedding/{weddingId}")
data class WeddingId(val weddingId: Long)