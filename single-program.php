<?php get_header(); 

while(have_posts()) {
    the_post();

    pageBannerTemplate();
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
                <a class="metabox__blog-home-link" href="<?php echo get_post_type_archive_link( "program" ); ?>">
                    <i class="fa fa-home" aria-hidden="true"></i> 
                    All Programs
                </a> 
                <span class="metabox__main"><?php the_title() ?></span>
            </p>
        </div>
        <!-- END META BOX INNER PAGE  -->
        <div class="generic-content">
            <?php the_content(); ?>
        </div> 

        <div class="related-programs">          <!-- <h2>Related Event(s)</h2> -->

<?php 

$relatedProfessorCQ = new WP_Query(array(
    "post_type" => "professor",
    "posts_per_page" => -1,
    "orderby" => 'title',
    "order" => "ASC",
    "meta_query" => array(
      array(
        "key" => "related_programs", //post type name you want to work on
        "compare" => "LIKE",
        "value" => '"' . get_the_ID() . '"'
      )
    )
  ));

  if($relatedProfessorCQ->have_posts()){

    echo '<hr class="section-break">';
    echo "<h2 class='headline headline--medium'>Professors</h2>";
    echo "<ul class='professor-cards'>";
 
    // looping in wordpress
    while($relatedProfessorCQ->have_posts()) {
        $relatedProfessorCQ->the_post();

?>
        <li class="professor-card__list-item">
            <a class="professor-card" href="<?php the_permalink(); ?>">
                <img class="professor-card__image" src="<?php the_post_thumbnail_url('prof_small'); ?>" alt="">
                <span class="professor-card__name"><?php the_title(); ?></span>
                 
            </a>
        </li>

<?php }   
echo "</ul>";
};

wp_reset_postdata();
?>
<?php 
  $pastEventPageCustomQueryForEvents = new WP_Query(array(
    "paged" => get_query_var('paged', 1),
    "post_type" => "event",
    "posts_per_page" => 1,
    "meta_key" => "event_date",
    "orderby" => 'meta_value_num',
    "order" => "ASC",
    "meta_query" => array(
      array(
        "key" => "event_date",
        "compare" => ">=",
        "value" => date("Ymd")
      ),
      array(
        "key" => "related_programs", //post type name you want to work on
        "compare" => "LIKE",
        "value" => '"' . get_the_ID() . '"'
      )
    )
  ));

  if($pastEventPageCustomQueryForEvents->have_posts()){

    echo '<hr class="section-break">';
    echo "<h2>Upcoming " . get_the_title() . " Events</h2>";
 
    // looping in wordpress
    while($pastEventPageCustomQueryForEvents->have_posts()) {
        $pastEventPageCustomQueryForEvents->the_post();

        get_template_part( 'template-parts/content', 'events');
    }
  }

  wp_reset_postdata();
  $relatedCampuses = get_field('related_campuses');

  if($relatedCampuses){
    echo '<hr class="section-break">';
    echo '<h2 class="headline headline--medium">'. get_the_title() . ' is available at this campuses</h2>';

    echo '</ul class="min-list link-list">';
    foreach ($relatedCampuses as $campus) { ?>
      <li><a href="<?php echo get_the_permalink($campus); ?>"><?php echo get_the_title($campus); ?></a></li>
    <?php }
    echo '</ul>';
  }
?>

<?php 
    // wp-pagination --> how to setup for custom queries
    echo paginate_links(array(
        'total' => $pastEventPageCustomQueryForEvents->max_num_pages
    ));

?>
        </div>
    </div>

<?php } get_footer(); ?>`