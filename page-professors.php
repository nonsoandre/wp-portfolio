<?php get_header(); ?>

<!-- PAGE BANNER START -->
    <div class="page-banner">
        <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri("/assets/images/ocean.jpg") ?>)"></div>
        <div class="page-banner__content container container--narrow">
            <h1 class="page-banner__title">University Staff</h1>
            <div class="page-banner__intro">
                <p>Recap of Events 
                    <?php                     
                        if(is_category()) {
                            echo "for "; single_cat_title();
                        }elseif (is_author()) {
                            echo " by "; the_author();
                        }else{
                            the_archive_description();
                        }
                    ?>
                </p> 
            </div>
        </div>
    </div>

    <div class="container container--narrow page-section">
      <ul class="link-list min-list">
<?php 

//the get_query_var functions queries the value of the url and returns a page number in the url. So what we are saying is that if there is a page number return it or if not default to 1

$professorsCustomQuery = new WP_Query(array(
    // "paged" => get_query_var('paged', 1),
    "post_type" => "professor",
    // "posts_per_page" => 1,
    // "meta_key" => "event_date",
    // "orderby" => 'meta_value_num',
    // "order" => "ASC"
    // "meta_query" => array(
    //   array(
    //     "key" => "event_date",
    //     "compare" => "<",
    //     "value" => date("Ymd")
    //   )
    // )
  ));
    // looping in wordpress
    while($professorsCustomQuery->have_posts()) {
        $professorsCustomQuery->the_post();

?>
    <li><a href="<?php echo get_the_permalink(); ?>"><?php echo get_the_title(); ?></a></li>
<?php } ?>

<?php 
    // wp-pagination --> how to setup for custom queries
    echo paginate_links(array(
        'total' => $professorsCustomQuery->max_num_pages
    ));

?>
      </ul>
    </div>


<?php get_footer() ?>