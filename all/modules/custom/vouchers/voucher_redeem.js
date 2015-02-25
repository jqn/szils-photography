(function ($) {
  Drupal.behaviors.fn_vouchers = {
    attach:function (context) {
      var $wrapper = $('.claim-offer-wrapper', context);
      var $select = $wrapper.find('select');
      var $link = $wrapper.find('a.claim-offer-link');
      var replacementPath = $wrapper.find('a.claim-offer-link').data('replacementPath');

      if ($select.length > 0) {
        // On change of quantity, modify the claim link.
        $select.change(function(e) {
          var val = $select.val();
          var claimLink = $wrapper.find('a.claim-offer-link')[0];
          claimLink.pathname = replacementPath.replace("[qty]", val);
        });
      }
    }
  };
})(jQuery);