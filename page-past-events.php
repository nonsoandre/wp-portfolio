<?php get_header(); 

pageBannerTemplate(array(
  'title' => "Past Events",
   'subtitle' => "Recap of Events",
   'photo' => ''
));
?>

<!-- PAGE BANNER START -->
    <!-- <div class="page-banner">
        <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri("/assets/images/ocean.jpg") ?>)"></div>
        <div class="page-banner__content container container--narrow">
            <h1 class="page-banner__title">Past Events</h1>
            <div class="page-banner__intro">
                <p>Recap of Events 
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
<?php 

//the get_query_var functions queries the value of the url and returns a page number in the url. So what we are saying is that if there is a page number return it or if not default to 1

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
        "compare" => "<",
        "value" => date("Ymd")
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


<?php get_footer() ?>