<?php

function portfolioFiles(){
    wp_enqueue_style("font-awesome", "//use.fontawesome.com/releases/v5.0.7/css/all.css");

    wp_enqueue_style("google_font", "//fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

    wp_enqueue_style("index-css", get_template_directory_uri()."/assets/build/index.css");
    wp_enqueue_style("style-index-css", get_template_directory_uri()."/assets/build/style-index.css");
    
    wp_enqueue_script("main.js", get_theme_file_uri("/assets/build/index.js"), array("jquery"), "1.0", true);

    // wp_enqueue_style( "wp-style", get_stylesheet_uri(), NULL , "1.0", true );
};

add_action("wp_enqueue_scripts", "portfolioFiles");

?> 