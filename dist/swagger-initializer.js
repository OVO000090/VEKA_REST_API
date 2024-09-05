window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
    {
		name : "V1 - API voor het ontsluiten van VEKA data aan externe afnemers - UAT",
		url: "datadiensten_uat_v1.yaml"
	},
    {
        name : "V1 - Energie attesten API - UAT",
        url: "energie-attesten/energie-attesten-api-uat-v1.yaml"
    },
	{
		name : "V1 - Energie attesten API - PROD",
		url: "energie-attesten/energie-attesten-api-prod-v1.yaml"
	}
	],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};