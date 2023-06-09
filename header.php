<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <!-- <title>Nonso Andre WP-Portfolio</title> -->
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i" rel="stylesheet" />
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />

    <!-- stylesheets -->
    <link rel="stylesheet" href="build/index.css" />
    <link rel="stylesheet" href="build/style-index.css" />

    <?php wp_head(); ?>
</head>
<body>
<header class="site-header">
      <div class="container">
        <h1 class="school-logo-text float-left">
          <a href="<?php echo site_url(); ?>"><strong>Andre's</strong> Portfolios</a>
        </h1>
        <span class="js-search-trigger site-header__search-trigger"><i class="fa fa-search" aria-hidden="true"></i></span>
        <i class="site-header__menu-trigger fa fa-bars" aria-hidden="true"></i>
        <div class="site-header__menu group">
          <nav class="main-navigation">
            <ul>
<?php 
    // wp_nav_menu(array(
    //     "theme_location" => "header_menu_location"
    // ));
?>
              <li <?php if (is_page('about-us') or wp_get_post_parent_id(get_the_ID() == 7)) echo "class='current-menu-item'";  ?>><a href="<?php echo site_url("/about-us"); //the site_url function calls the root of your webiste path ?>">About Us</a></li>
              <li <?php if(get_post_type() == "program") echo "class='current-menu-item'"; ?> ><a href="<?php echo get_post_type_archive_link('program'); ?>">Programs</a></li>
              <li <?php if(get_post_type() == "event" OR is_page('past-events')) echo "class = 'current-menu-item' "?>><a href="<?php echo site_url("/events"); ?>">Events</a></li>
              <li <?php if (get_post_type() == "campus") echo "class='current-menu-item'"  ?>><a href="<?php echo get_post_type_archive_link('campus')?>">Campuses</a></li>
              <li <?php if (get_post_type() == "post") echo "class='current-menu-item'";  ?>><a href="<?php echo site_url("/blog")?>">Blog</a></li>
            </ul>
          </nav>
          <div class="site-header__util">
            <a href="#" class="btn btn--small btn--orange float-left push-right">Login</a>
            <a href="#" class="btn btn--small btn--dark-orange float-left">Sign Up</a>
            <span id="js-search-trigger" class="search-trigger js-search-trigger"><i class="fa fa-search" aria-hidden="true"></i></span>
          </div>
        </div>
      </div>
    </header>