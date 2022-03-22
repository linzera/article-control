# SISTEMA PARA CONTROLE DE SUBMISSÃO E AVALIAÇÃO DE ARTIGOS DE CONGRESSOS

O software deverá controlar a execução de congressos, incluindo a inscrição de participantes e a seleção de
artigos.

Os participantes devem se inscrever preenchendo fichas de inscrição na Web, contendo nome, endereço,
telefone, e-mail e local de emprego dos participantes, além do número, data de vencimento e marca do
cartão de crédito. Assim que uma inscrição é feita, o sistema deve responder ao participante com uma
confirmação de inscrição, contendo um número único por participante, que é o número de inscrição, e
imprimir, na sede, um crachá e um certificado de participação que serão entregues durante o congresso aos
participantes.

Só podem enviar artigos para julgamento pessoas que já se inscreveram como participantes. Um autor só
precisa se inscrever uma vez, mesmo que envie vários artigos. Um artigo pode ter vários autores.
Os artigos devem ser enviados pelos autores em um formulário Web, que deve exigir os nomes, números de
inscrição e e-mail de todos os autores, para confirmação com os dados da inscrição, e um resumo do artigo e
possibilitar o envio do artigo em .PDF. Se algo estiver errado deve recusar o envio. Caso tudo esteja certo, o
sistema deve responder com uma confirmação de submissão, incluindo um número único de identificação de
artigo.

Os artigos são julgados por revisores. Um revisor é um participante do congresso já cadastrado, que marcou
na ficha de inscrição ser voluntário como revisor. Isso tem que estar guardado na base de dados.
Ao encerrar o prazo para submissões o sistema deve enviar os artigos para revisão. Cada artigo deve ser
enviado por e-mail para 05 revisores escolhidos aleatoriamente pelo sistema.

Cada revisor tem 05 dias para enviar uma avaliação do artigo, por meio de um formulário Web, onde deve
constar uma nota de 1 a 10 para o artigo e um comentário para o autor. Só serão aceitos artigos com pelo
menos 03 revisões, mas o objetivo é ter 05. Quando um revisor responde, o seu comentário é enviado
imediatamente para os autores do artigo por e-mail e a nota é guardada para a seleção final.

Se o revisor não responder em 05 dias úteis o artigo é enviado para outro revisor, até que se completem as 05 revisões ou
encerre o prazo para revisões. Ao encerrar o prazo de revisão é feita a seleção final. Para isso o sistema deve
fazer uma lista de todos os artigos em ordem decrescente das médias obtidas na avaliação, até o 20o artigo,
excluindo aqueles com menos de 03 revisões.

Esses são os artigos aprovados. Essa lista será divulgada por e-mail para todos os participantes.
