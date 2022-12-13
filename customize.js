module.exports = {
    version: "0.1.0",
  
    actions: async function (repoName, answers, copyAndMerge) {
        await copyAndMerge(repoName, answers)
        //TODO: ln -s /opt/others/vuepress/nginx/dist/ /usr/share/nginx/html/docs
        //TODO: create/update definition (original na learning)
        //TODO: create/update permissions
        //TODO: criar instância .site. e .site.home.
        //TODO: perguntar id da definição de conteúdo e substituir onde necessário (actions e References.vue e graph.vue)
        //TODO: deploy (to have content actions)
        //TODO: indicar que é necessário configurar o ./other/vuepress/config.json
        //TODO: indicar que é necessário configurar o ./other/vuepress/config.js
        //TODO: build 
        //TODO: deploy
        /*
        Sequência:
            1. cob-cli customize backend.vuepress 
            2. git add .; git commit -m “chore: cob-cli customize backend.vuepress"
            2. cob-cli deploy
            2. ln -s /opt/others/vuepress/nginx/dist/ /usr/share/nginx/html/docs (na máquina)
            3. install Contents definition
            4. add permissions
            5. config server.json
            6. create contents:
                 .site.
                 .site.home. 
                 .site.home.sitemap
        */
    }
}