package com.londogard
/**
import io.bkbn.kompendium.Kompendium
import io.bkbn.kompendium.models.oas.OpenApiSpecInfo
import io.bkbn.kompendium.models.oas.OpenApiSpecInfoContact
import io.bkbn.kompendium.models.oas.OpenApiSpecServer
import kotlinx.serialization.Serializable
import java.net.URI


val oas = Kompendium.openApiSpec.copy(
    info = OpenApiSpecInfo(
        title = "Londogard API",
        version = "1.0.0",
        description = "An amazing, fully-ish 😉 generated API spec",
        contact = OpenApiSpecInfoContact(
            name = "Hampus Londögård",
            email = "hampus.londogard@gmail.com",
            url = URI("https://londogard.com")
        )
    ),
    servers = mutableListOf(
        OpenApiSpecServer(
            url = URI("https://londogard.com"),
            description = "Production instance of Londogard"
        ),
        OpenApiSpecServer(
            url = URI("http://localhost:8080"),
            description = "The test instance"
        )
    )
)*/