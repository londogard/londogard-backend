plugins {
    kotlin("jvm") version "1.6.0"
    kotlin("plugin.serialization") version "1.6.0"

    id("com.squareup.sqldelight") version "1.5.2"
    id("com.github.johnrengelman.shadow") version "7.1.0"

    application
}

group = "com.londogard"
version = "0.0.1"

application {
    mainClass.set("io.ktor.server.netty.EngineMain")
}

sourceSets {

    main {
        java.setSrcDirs(listOf("src"))

        resources {
            setSrcDirs(listOf("resources"))
        }
    }
}

repositories {
    mavenLocal()
    mavenCentral()
    maven(url="https://kotlin.bintray.com/ktor")
    maven(url="https://jitpack.io")
}

val ktorVersion="1.6.4"
val sqldelightVersion="1.5.3"
val koinVersion="3.1.4"
val kluentVersion="1.68"
val kotlinVersion="1.5.31"
val kotlinxSerialization="1.3.0"
val logbackVersion="1.2.7"

dependencies {
    implementation(kotlin("stdlib"))
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-core:$kotlinxSerialization")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-cbor:$kotlinxSerialization")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:$kotlinxSerialization")
    implementation("org.json:json:20210307") // XML

    implementation("ch.qos.logback:logback-classic:$logbackVersion")

    implementation("com.londogard:summarize-kt:1.2.0")
    implementation("com.londogard:londogard-nlp-toolkit:1.0.0")
    implementation("com.londogard:text-gen-kt:1.1.0")
    implementation("com.londogard:fuzzy-match-kt:1.0.1")
    implementation("com.londogard:stokk:0.1.0")

    implementation("org.jetbrains:markdown:0.2.4")

    implementation("com.squareup.sqldelight:sqlite-driver:$sqldelightVersion")
    implementation("com.squareup.sqldelight:runtime-jvm:$sqldelightVersion")

    implementation("io.ktor:ktor-server-netty:$ktorVersion")
    implementation("io.ktor:ktor-server-core:$ktorVersion")
    implementation("io.ktor:ktor-html-builder:$ktorVersion")
    implementation("io.ktor:ktor-auth:$ktorVersion")
    implementation("io.ktor:ktor-auth-jwt:$ktorVersion")
    implementation("io.ktor:ktor-serialization:$ktorVersion")
    implementation("io.ktor:ktor-locations:$ktorVersion")

    implementation("io.ktor:ktor-client-core:$ktorVersion")
    implementation("io.ktor:ktor-client-cio:$ktorVersion")
    implementation("io.ktor:ktor-client-serialization:$ktorVersion")

    implementation("io.insert-koin:koin-ktor:$koinVersion")

    // implementation 'com.github.kwebio:kweb-core:0.8.9'

    implementation("org.boofcv:boofcv-core:0.39")
    implementation("org.boofcv:boofcv-kotlin:0.40.1")

    implementation("org.mindrot:jbcrypt:0.4")

    testImplementation("io.ktor:ktor-server-test-host:$ktorVersion")
    testImplementation("org.amshove.kluent:kluent:$kluentVersion")
}

sqldelight {
    database("Database") {
        packageName = "com.londogard"
    }
}
