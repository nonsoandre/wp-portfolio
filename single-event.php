<?php get_header(); 


while(have_posts()) {
    the_post();

    pageBannerTemplate(array(
        'title' => get_the_title(),
         'subtitle' => "",
         'photo' => ''
    ));
?>


    <!-- <div class="page-banner">
        <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri("/assets/images/ocean.jpg") ?>)"></div>
        <div class="page-banner__content container container--narrow">
            <h1 class="page-banner__title"><?php the_title(); ?></h1>
            <div class="page-banner__intro">
            <p>Don't forget to replace this later.</p>
            </div>
        </div>
    </div> -->



    <div class="container container--narrow page-section">    
        <!-- START META BOX INNER PAGE -->
        <div class="metabox metabox--position-up metabox--with-home-link">
            <p>
                <a class="metabox__blog-home-link" href="<?php echo site_url("/events"); ?>">
                    <i class="fa fa-home" aria-hidden="true"></i> 
                    Events Home
                </a> 
                <span class="metabox__main"><?php the_title(); ?></span>
            </p>
        </div>
        <!-- END META BOX INNER PAGE  -->
        <div class="generic-content">
            <?php the_content(); ?>
        </div> 
        <div class="related-programs">
    <?php 
        $relatedPrograms = get_field('related_programs');

        if($relatedPrograms) {
            echo '<hr class="section-break">
            <h2>Related Program(s)</h2>
            <ul class="link-list min-list">';
            foreach($relatedPrograms as $programs){ ?>
            <li><a href="<?php echo get_the_permalink($programs); ?>"><?php echo get_the_title($programs); ?></a></li>
    <?php } } ?>
            </ul>
        </div>

</div>

<?php } get_footer(); ?>