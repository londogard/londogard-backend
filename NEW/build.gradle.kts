plugins {
    kotlin("multiplatform") version "1.4.21"
    id("dev.fritz2.fritz2-gradle") version "0.8"
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
    js(LEGACY) {
        browser {
            binaries.executable()
            runTask {
                devServer = devServer?.copy(port = 3000)
            }

            testTask {
                useKarma {
                    useChromeHeadless()
                    webpackConfig.cssSupport.enabled = true
                }
            }
        }
    }
    
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
                implementation("dev.fritz2:core:0.8")
                implementation("dev.fritz2:styling:0.8")
                implementation("dev.fritz2:components:0.8")
                implementation(npm("img-comparison-slider", "3.0.1"))
            }
        }
        val jsTest by getting {
            dependencies {
                implementation(kotlin("test-js"))
            }
        }
    }
}
