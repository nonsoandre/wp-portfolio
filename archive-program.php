<?php get_header(); 

// calling the page banner template
pageBannerTemplate(array(
    'title' => 'All Programs',
     'subtitle' => 'All programs offered by our university ',
     'photo' => ''
));
?>

<!-- PAGE BANNER START -->
    <!-- <div class="page-banner">
        <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri("/assets/images/ocean.jpg") ?>)"></div>
        <div class="page-banner__content container container--narrow">
            <h1 class="page-banner__title">All Programs</h1>
            <div class="page-banner__intro">
                <p>All programs offered by our university
                    <?php                     
                        // if(is_category()) {
                        //     echo "for "; single_cat_title();
                        // }elseif (is_author()) {
                        //     echo " by "; the_author();
                        // }else{
                        //     the_archive_description();
                        // }
                    ?>
                </p> 
            </div>
        </div>
    </div> -->

    <div class="container container--narrow page-section">
        <ul class="min-list link-list">
<?php 
    // looping in wordpress
    while(have_posts()) {
        the_post();
?>
    <li><a href="<?php the_permalink()?>"><?php the_title(); ?></a></li>
<?php } ?>

<?php echo paginate_links(); ?>
       
       </ul>
       <!-- <hr class="section-break">
       <p>Looking for a past event recap? Checkout our past event archive <a href="<?php echo site_url("/past-events"); ?>">Past Events</a></p> -->
    </div>


<?php get_footer() ?>