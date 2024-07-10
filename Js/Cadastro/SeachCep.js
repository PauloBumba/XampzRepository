$(document).ready(
    ()=>{
        async function SeachCep() {
            var cep = $("#icep").val().replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
            const url = `https://viacep.com.br/ws/${cep}/json/`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    alert("Erro: CEP não encontrado. Certifique-se de que o CEP está correto.");
                }
                const data = await response.json();
                if (data.erro) {
                    alert("Erro: CEP não encontrado.");
                }
                $("#ipais").val("Brasil");
                $("#iestado").val(data.uf);
                $("#icidade").val(data.localidade);
                $("#ibairro").val(data.bairro);
                $("#irua").val(data.logradouro);
            } catch (error) {
                alert("Digitos errados , certifica que ela esta neste padrão xxxxx-xxx , sem utilizar hifen");
            }
        }

        $("#SeachCep").click(function () {
            SeachCep();
        });

    }
)