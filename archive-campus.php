<?php get_header(); 

// calling the page banner template
pageBannerTemplate(array(
    'title' => 'Our Campuses',
     'subtitle' => 'Get several conviniently located campuses',
     'photo' => ''
));
?>

    <div class="container container--narrow page-section">
        <div class="acf-map">
<?php 
    // looping in wordpress
    while(have_posts()) {
        the_post();

        // get the map_info from acf and store in a variable
        $map_location = get_field('map_location');
?>
            <!-- pass the gotten information into the data attribute -->
            <div class="marker" data-lat='<?php echo $map_location['lat']; ?>' data-lng='<?php echo $map_location['lng']; ?>'>
                <a href="<?php the_permalink(); ?>"><h3><?php the_title(); ?></h3></a>
                <!-- <?php echo $map_location['address']; ?> -->
            </div>
        </div>
<?php } ?>

    </div>


<?php get_footer() ?>