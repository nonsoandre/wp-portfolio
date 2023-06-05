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
                <a class="metabox__blog-home-link" href="<?php echo get_post_type_archive_link( "campus" ); ?>">
                    <i class="fa fa-home" aria-hidden="true"></i> 
                    Campuses
                </a> 
                <span class="metabox__main"><?php the_title() ?></span>
            </p>
        </div>
        <!-- END META BOX INNER PAGE  -->
        <div class="generic-content">
            <?php the_content(); 
            // get the map variables
            $map_location = get_field('map_location');
            ?>
        </div> 

        <div class="acf-map">
            <!-- pass the gotten information into the data attribute -->
            <div class="marker" data-lat='<?php echo $map_location['lat']; ?>' data-lng='<?php echo $map_location['lng']; ?>'>
                <a href="<?php the_permalink(); ?>"><h3><?php the_title(); ?></h3></a>
                <!-- <?php echo $map_location['address']; ?> -->
            </div>
        </div>

        <div class="related-programs">          <!-- <h2>Related Event(s)</h2> -->

<?php 

$relatedPrograms = new WP_Query(array(
    "post_type" => "program",
    "posts_per_page" => -1,
    "orderby" => 'title',
    "order" => "ASC",
    "meta_query" => array(
      array(
        "key" => "related_campuses", //post type name you want to work on
        "compare" => "LIKE",
        "value" => '"' . get_the_ID() . '"'
      )
    )
  ));

  if($relatedPrograms->have_posts()){

    echo '<hr class="section-break">';
    echo "<h2 class='headline headline--medium'>Programs available at this Campus</h2>";
    echo "<ul class='min-list link-list'>";
 
    // looping in wordpress
    while($relatedPrograms->have_posts()) {
        $relatedPrograms->the_post();

?>
        <li>
            <a href="<?php the_permalink(); ?>">
                <span><?php the_title(); ?></span>
                 
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