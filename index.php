<?php get_header(); ?>


<!-- PAGE BANNER START -->
    <div class="page-banner">
        <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri("/assets/images/ocean.jpg") ?>)"></div>
        <div class="page-banner__content container container--narrow">
            <h1 class="page-banner__title">Write</h1>
            <div class="page-banner__intro">
            <p>All my posts posted.</p>
            </div>
        </div>
    </div>

    <div class="container container--narrow page-section">
<?php 
    // looping in wordpress
    while(have_posts()) {
        the_post();

?>
    <div class="post-item">
        <h2 class="headline headline--medium headline--post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
        <div class="metabox">
            <p>Posted by <?php the_author(); ?> on <?php the_time("M,j,y"); ?> in <?php echo get_the_category_list(", "); ?></p>
        </div>
        <div class="generic-content">
            <p><?php the_excerpt(); ?></p>
            <p><a class="btn btn--blue" href="<?php the_permalink(); ?>">Continue reading &raquo; </a></p>
        </div>
    </div>


<?php } ?>

<?php 
    // wp-pagination
    echo paginate_links();

?>
    </div>


<?php get_footer() ?>