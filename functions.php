<?php

function portfolioFiles(){
    wp_enqueue_style("font-awesome", "//use.fontawesome.com/releases/v5.0.7/css/all.css");
    wp_enqueue_style("google_font", "//fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

    wp_enqueue_style("index-css", get_template_directory_uri()."/assets/build/index.css");
    wp_enqueue_style("style-index-css", get_template_directory_uri()."/assets/build/style-index.css");
    wp_enqueue_style("my-css", get_template_directory_uri()."/assets/build/my.css");

    wp_enqueue_script("main.js", get_theme_file_uri("/assets/build/index.js"), array("jquery"), "1.0", true);
    wp_enqueue_style( "wp-style", get_stylesheet_uri(), NULL , "1.0", true );
};

add_action("wp_enqueue_scripts", "portfolioFiles");

 
function portfolio_features(){
    add_theme_support("title-tag"); //this adds dynamic page titles based on generated titles from the dashboard
    register_nav_menu("footer_location_1", "Footer Location 1");
    register_nav_menu("footer_location_2", "Footer Location 2");
    register_nav_menu("header_menu_location", "Header Navigation Menu"); //this register a location on wordpress on where a user can create and add menu items

}

add_action("after_setup_theme", "portfolio_features"); // this function helps certain feature like page title tags etc

// handling post-type queries
function university_adjust_queries($query) {
    if (!is_admin() AND is_post_type_archive('project') AND is_main_query()){

    }
}

add_action('pre_get_posts', 'university_adjust_queries')


?> 