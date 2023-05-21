<?php get_header(); 

while(have_posts()) {
    the_post();
?>


    <div class="page-banner">
        <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri("/assets/images/ocean.jpg") ?>)"></div>
        <div class="page-banner__content container container--narrow">
            <h1 class="page-banner__title"><?php the_title(); ?></h1>
            <div class="page-banner__intro">
            <p>Don't forget to replace this later.</p>
            </div>
        </div>
    </div>



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

        <div class="related-programs">
            <hr class="section-break">
            <h2>Related Event(s)</h2>

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
    // looping in wordpress
    while($pastEventPageCustomQueryForEvents->have_posts()) {
        $pastEventPageCustomQueryForEvents->the_post();

?>
          <div class="event-summary">
            <a class="event-summary__date t-center" href="#">
              <span class="event-summary__month">
                <?php 
                    $eventTime = new DateTime(get_field('event_date'));
                    echo $eventTime->format('M');
                ?>
              </span>
              <span class="event-summary__day">                <?php 
                    $eventTime = new DateTime(get_field('event_date'));
                    echo $eventTime->format('d');
                ?>
              </span>
            </a>
            <div class="event-summary__content">
              <h5 class="event-summary__title headline headline--tiny"><a href="<?php the_permalink()?>"><?php the_title() ?></a></h5>
              <p><?php if(has_excerpt()) {
                  echo get_the_excerpt();
              }else{
                echo wp_trim_words(get_the_content(), 18);
              }
              ?> ...<a href="<?php the_permalink()?>" class="nu gray">Learn more</a></p>
            </div>
          </div>

<?php } ?>

<?php 
    // wp-pagination --> how to setup for custom queries
    echo paginate_links(array(
        'total' => $pastEventPageCustomQueryForEvents->max_num_pages
    ));

?>
        </div>
    </div>

<?php } get_footer(); ?>`