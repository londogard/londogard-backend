package com.lundekhan.htmltemplates

import kotlinx.html.HEAD
import kotlinx.html.style
import kotlinx.html.unsafe

fun HEAD.getStyle() = style {
    unsafe {
        raw("""
                                    body {
                                        background-color: #EEEEEE;
                                        color: #ccc;
                                        margin:40px auto;
                                        max-width:650px;
                                        line-height:1.6;
                                        color:#444;
                                        padding:0 10px;
                                        font-family: 'Roboto';
                                        font-size: 18px;
                                    }
                                    hr {
                                        margin-top: 0em;
                                        margin-bottom: 0em;
                                    }
                                    h1,h2,h3{
                                        line-height:1.2
                                    }
                                    a {
                                        text-decoration: none;
                                    }
                                    a:link, a:visited {
                                        color: #444;
                                    }
                                    a:hover {
                                        color: red;
                                    }
                                    pre {
                                        white-space: -moz-pre-wrap; /* Mozilla, supported since 1999 */
                                        white-space: -pre-wrap; /* Opera */
                                        white-space: -o-pre-wrap; /* Opera */
                                        white-space: pre-wrap; /* CSS3 - Text module (Candidate Recommendation) http://www.w3.org/TR/css3-text/#white-space */
                                        word-wrap: break-word; /* IE 5.5+ */
                                    }
                                """)
    }
}