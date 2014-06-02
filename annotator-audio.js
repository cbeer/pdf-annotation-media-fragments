Annotator.Plugin.Audio = function (element) {
  var plugin = {};

  plugin.pluginInit = function () {
      this.annotator.editor.addField({
        label: Annotator._t('Add Media Fragment URL here') + '\u2026',
        load: this.updateField,
        submit: this.setMediaFragment
      })

      this.annotator.viewer.addField({
        load: this.updateViewer
      })
  };
  
  plugin.updateField = function(field, annotation) {
    $(field).find(':input').val(annotation.media_fragment);
  };
  
  plugin.setMediaFragment = function(field, annotation) {
    annotation.media_fragment = $(field).find(':input').val();
  };
  
  plugin.updateViewer = function(field, annotation) {
    $(field).append(
      $('<a>').html("<i class=\"fa fa-play-circle\"></i> Play")
              .attr('href', annotation.media_fragment)
              .addClass('media-fragment-url')
              .on('click', function(e) {
                e.preventDefault();
                plugin.playAudio(this.href);
              })
      );
  };
  
  plugin.playAudio = function(uri) { 
    $("#player_div").smfplayer('destroy');
    
    var player = $("#player_div").smfplayer({
          mfURI:uri,
          autoStart:true,
          width:300,
          height:32,
          isVideo: false
    });
  };

  return plugin;
}
