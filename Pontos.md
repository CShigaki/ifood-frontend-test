# Geral
* O Parcel foi usado pela sua facilidade em relação ao Webpack.
* Apesar de não ter muita familiaridade com o Material-UI, ele foi escolhido pela diversidade de componentes e pela facilidade.
* Sass pra facilitar a criação dos estilos.
* Com o mais recente update do React decidi abandonar as classes e tentar usar as hooks como forma de aprendizado.

# Pontos de melhora
* Por facilidade e porque não vi motivo pra essa aplicação, não implementei suporte à refresh token. O token tem duração de de 1 hora e redireciona o usuário para a tela inicial quando expirado.
* O tratamento de resposta (exibição de mensagens de status para outros códigos além de 200) e renderização da `Playlist` poderiam ser feitas usando um `HOC`, extraindo a lógica e deixando o `FeaturedPlaylistSerach` mais enxuto.
* Faltam testes de Snapshot e testes da validação do `LimitedIntegerFilter`.
* Faltou a criação de um arquivo de constantes para as constantes usadas nos arquivos de serviço.
* As mensagens exibidas não estão feitas para suportar internacionalização.
* O token retornado pela API poderia ser armazenado no localStorage.
