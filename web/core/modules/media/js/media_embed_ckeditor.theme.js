/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  Drupal.theme.mediaEmbedPreviewError = function () {
    return '<div>' + Drupal.t('An error occurred while trying to preview the media. Please save your work and reload this page.') + '</div>';
  };

  Drupal.theme.mediaEmbedEditButton = function () {
    return '<button class="media-library-item__edit">' + Drupal.t('Edit media') + '</button>';
  };
})(Drupal);