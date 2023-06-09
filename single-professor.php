<?php get_header(); 


while(have_posts()) {
    the_post();

    pageBannerTemplate();
?>

   <div class="container container--narrow page-section">    
        <!-- START META BOX INNER PAGE -->
        <!-- <div class="metabox metabox--position-up metabox--with-home-link">
            <p>
                <a class="metabox__blog-home-link" href="<?php echo site_url("/events"); ?>">
                    <i class="fa fa-home" aria-hidden="true"></i> 
                    Events Home
                </a> 
                <span class="metabox__main"><?php the_title(); ?></span>
            </p>
        </div> -->
        <!-- END META BOX INNER PAGE  -->
        <div class="generic-content">
            <div class="row group">
                <div class="one-third"><?php the_post_thumbnail('prof_big'); ?></div>
                <div class="two-third"><?php the_content(); ?></div>
            </div>
            
        </div> 
        <div class="related-programs">
    <?php 
        $relatedPrograms = get_field('related_programs');

        if($relatedPrograms) {
            echo '<hr class="section-break">
            <h2>Subject(s) Taught</h2>
            <ul class="link-list min-list">';
            foreach($relatedPrograms as $programs){ ?>
            <li><a href="<?php echo get_the_permalink($programs); ?>"><?php echo get_the_title($programs); ?></a></li>
    <?php } } ?>
            </ul>
        </div>

</div>

<?php } get_footer(); ?>