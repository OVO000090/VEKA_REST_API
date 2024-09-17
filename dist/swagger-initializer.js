window.onload = function () {
    //<editor-fold desc="Changeable Configuration Block">

    // the following lines will be replaced by docker/configurator, when it runs in a docker-container
    window.ui = SwaggerUIBundle({
        urls: [
            {
                name: "V1 - API voor het ontsluiten van VEKA data aan externe afnemers - UAT",
                url: "datadiensten_uat_v1.yaml"
            },
            {
                name: "V1 - API voor het ontsluiten van VEKA data aan externe afnemers - PROD",
                url: "datadiensten_prod_v1.yaml"
            },
            {
                name: "V1 - Energie attesten API - TEST",
                url: "energie-attesten/energie-attesten-api-test-v1.yaml"
            },
            {
                name: "V1 - Energie attesten API - UAT",
                url: "energie-attesten/energie-attesten-api-uat-v1.yaml"
            },
            {
                name: "V1 - Energie attesten API - PROD",
                url: "energie-attesten/energie-attesten-api-prod-v1.yaml"
            },
            {
                name: "V1 - Energie API - TEST",
                url: "energie/energie-api-test-v1.yaml"
            },
            {
                name: "V1 - Energie API - UAT",
                url: "energie/energie-api-uat-v1.yaml"
            },
            {
                name: "V1 - Energie API - PROD",
                url: "energie/energie-api-prod-v1.yaml"
            },
            {
                name: "V1 - Energie API - TEST",
                url: "energiepremies/energiepremies-api-test-v1.yaml"
            },
            {
                name: "V1 - Energiepremies API - UAT",
                url: "energiepremies/energiepremies-api-uat-v1.yaml"
            },
            {
                name: "V1 - Energiepremies API - PROD",
                url: "energiepremies/energiepremies-api-prod-v1.yaml"
            },
            {
                name: "V1 - Energiepremies API - TEST",
                url: "examens/examens-api-test-v1.yaml"
            },
            {
                name: "V1 - Examens API - UAT",
                url: "examens/examens-api-uat-v1.yaml"
            },
            {
                name: "V1 - Examens API - PROD",
                url: "examens/examens-api-prod-v1.yaml"
            },
            {
                name: "V1 - Dossier API - TEST",
                url: "dossier/dossier-api-test-v1.yaml"
            },
            {
                name: "V1 - Dossier API - UAT",
                url: "dossier/dossier-api-uat-v1.yaml"
            },
            {
                name: "V1 - Dossier API - PROD",
                url: "dossier/dossier-api-prod-v1.yaml"
            },
            {
                name: "V1 - MCS API - TEST",
                url: "mcs/mcs-api-test-v1.yaml"
            },
            {
                name: "V1 - MCS API - UAT",
                url: "mcs/mcs-api-uat-v1.yaml"
            },
            {
                name: "V1 - MCS API - PROD",
                url: "mcs/mcs-api-prod-v1.yaml"
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