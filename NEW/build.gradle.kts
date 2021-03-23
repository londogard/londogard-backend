plugins {
    kotlin("multiplatform") version "1.4.30"
    id("dev.fritz2.fritz2-gradle") version "0.9"
}

group = "com.londogard"
version = "1.0-SNAPSHOT"

repositories {
    jcenter()
    maven(url="https://dl.bintray.com/jwstegemann/fritz2")
}

kotlin {
    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
        testRuns["test"].executionTask.configure {
            useJUnit()
        }
    }

    js(IR) {
        browser()
    }.binaries.executable()

    sourceSets {
        val commonMain by getting
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
            }
        }
        val jvmMain by getting
        val jvmTest by getting {
            dependencies {
                implementation(kotlin("test-junit"))
            }
        }
        val jsMain by getting {
            dependencies {
                implementation("dev.fritz2:core:0.9")
                implementation("dev.fritz2:styling:0.9")
                implementation("dev.fritz2:components:0.9")
            }
        }
        val jsTest by getting {
            dependencies {
                implementation(kotlin("test-js"))
            }
        }
    }
}
