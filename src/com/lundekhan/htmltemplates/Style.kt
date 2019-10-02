package com.lundekhan.htmltemplates

import kotlinx.html.BODY
import kotlinx.html.style
import kotlinx.html.unsafe

fun BODY.getStyle() = style {
    unsafe {
        raw("""
                                    body {
                                        background-color: #EEEEEE;
                                        color: #ccc;
                                        margin:40px auto;
                                        max-width:650px;
                                        line-height:1.6;
                                        font-size:18px;
                                        color:#444;
                                        padding:0 10px;
                                        font-family: 'Roboto', sans-serif;
                                        font-size: 48px;
                                    }
                                    h1,h2,h3{
                                        line-height:1.2
                                    }
                                """)
    }
}