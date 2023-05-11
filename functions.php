<?php

function portfolioFiles(){
    wp_enqueue_style( "main-portfolio-style", get_template_directory_uri() . "/assets/css/style.css");
    // wp_enqueue_style( "wp-style", get_stylesheet_uri(), NULL , "1.0", true );
};

add_action("wp_enqueue_scripts", "portfolioFiles");

?> 