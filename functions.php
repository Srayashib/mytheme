<?php
function mytheme_enqueue_scripts() {
    
    wp_enqueue_style('mytheme-style', get_template_directory_uri() . '/css/style.css');

    
    wp_enqueue_style('font-awesome', get_template_directory_uri() . '/css/all.min.css');

    
    wp_enqueue_script('mytheme-script', get_template_directory_uri() . '/js/script.js', array(), false, true);
}
add_action('wp_enqueue_scripts', 'mytheme_enqueue_scripts');
?>
