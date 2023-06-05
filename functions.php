<?php

function portfolioFiles(){
    wp_enqueue_style("font-awesome", "//use.fontawesome.com/releases/v5.0.7/css/all.css");
    wp_enqueue_style("google_font", "//fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
    wp_enqueue_style("google_map", "//maps.googleapis.com/maps/api/js/AIzaSyDiQ6CiuZ7CC_Rb0SaCYyqzEwgT3s9a11Q", NULL,"1.0", true);

    wp_enqueue_style("index-css", get_template_directory_uri()."/assets/build/index.css");
    wp_enqueue_style("style-index-css", get_template_directory_uri()."/assets/build/style-index.css");
    wp_enqueue_style("my-css", get_template_directory_uri()."/assets/build/my.css");

    wp_enqueue_script("main.js", get_theme_file_uri("/assets/build/index.js"), array("jquery"), "1.0", true);
    wp_enqueue_style( "wp-style", get_stylesheet_uri(), NULL , "1.0", true );
};

add_action("wp_enqueue_scripts", "portfolioFiles");

 
function portfolio_features(){
    add_theme_support("title-tag"); //this adds dynamic page titles based on generated titles from the dashboard
    add_theme_support("post-thumbnails");
    add_image_size( 'prof_small', 400, 250, true );
    add_image_size('prof_big', 480, 650, true);
    register_nav_menu("footer_location_1", "Footer Location 1");
    register_nav_menu("footer_location_2", "Footer Location 2");
    register_nav_menu("header_menu_location", "Header Navigation Menu"); //this register a location on wordpress on where a user can create and add menu items

}

add_action("after_setup_theme", "portfolio_features"); // this function helps certain feature like page title tags etc

// handling post-type queries through the functions.php
function university_adjust_queries($query) {
    if (!is_admin() AND is_post_type_archive('project') AND is_main_query()){
        $query->set('orderby', 'title');
        $query->set('order', 'Asc');
        $query->set('posts_per_page', -1);
    }
}

add_action('pre_get_posts', 'university_adjust_queries');

// acf maps field api connection
// function campusMapKeys($api) {
//     $api['key'] = 'AIzaSyDiQ6CiuZ7CC_Rb0SaCYyqzEwgT3s9a11Q';
//     return $api;
// }

add_filter('acf/fields/google_map/api', 'campusMapKeys');


//  creating functional template part
function pageBannerTemplate ($args = NULL){ 

    // so it happens that without this code, a php error is thrown that says the array values are empty but then still goes ahead to work with the code. This line of code below prevents this error from being thrown for cases where the function is ran without an arguement.
    if(!$args){
        $args = array(
            'title' => '',
            'subtitle' => '',
            'photo' => ''
        );
    }

    if(!$args['title']){
        $args['title'] = get_the_title();
    };

    if(!$args['subtitle']){
        $args['subtitle'] = get_field('page_banner_subtitle');
    };

    if(!$args['photo']){
        if(get_field('page_cover_image')){
            $args['photo'] = get_field('page_cover_image')['url'];
        }else{
            $args['photo'] = get_theme_file_uri("/assets/images/ocean.jpg");
        }
    }
?>
    <div class="page-banner">
        <div class="page-banner__bg-image" style="background-image: url(<?php echo $args['photo']; ?>)"></div>
        <div class="page-banner__content container container--narrow">
            <h1 class="page-banner__title"><?php echo $args['title']; ?></h1>
            <div class="page-banner__intro">
            <p><?php echo $args["subtitle"]; ?> </p>
            </div>
        </div>
    </div>

<?php
}
?> 