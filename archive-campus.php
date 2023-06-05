<?php get_header(); 

// calling the page banner template
pageBannerTemplate(array(
    'title' => 'Our Campuses',
     'subtitle' => 'Get several conviniently located campuses',
     'photo' => ''
));
?>

    <div class="container container--narrow page-section">
        <ul class="min-list link-list">
<?php 
    // looping in wordpress
    while(have_posts()) {
        the_post();
?>
            <?php 
            
                the_title(); 
                // get the map_info from acf and store in a variable
                $map_location = get_field('map_location');
            ?>
            <!-- pass the gotten information into the data attribute -->
            <div class="marker" data-lat='<?php echo $map_location['lat']; ?>' data-lng='<?php echo $map_location['lng']; ?>'></div>

<?php } ?>

<?php echo paginate_links(); ?>
       
       </ul>
       <!-- <hr class="section-break">
       <p>Looking for a past event recap? Checkout our past event archive <a href="<?php echo site_url("/past-events"); ?>">Past Events</a></p> -->
    </div>


<?php get_footer() ?>