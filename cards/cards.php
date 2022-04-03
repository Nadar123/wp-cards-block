<?php
/**
 * Plugin Name:       Cards
 * Description:       Cards block
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Nadar
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cards
 *
 * @package           create-block
 */


function create_block_cards_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_cards_block_init' );
