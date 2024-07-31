$(document).ready(() => 
{
    async function searchCep() 
    {
        const cep = $("#icep").val().replace(/[^0-9]/g, ''); 
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        try {
            const response = await fetch(url);
            if (!response.ok) 
            {
                toastr.error("CEP não encontrado. Verifique se o CEP está correto.");
                return;
            }
            const data = await response.json();
            if (data.error) 
            {
                toastr.error("CEP não encontrado.");
                return;
            }
            $("#ipais").val("Brasil");
            $("#iestado").val(data.uf);
            $("#icidade").val(data.localidade);
            $("#ibairro").val(data.bairro);
            $("#irua").val(data.logradouro);
            toastr.success("Endereço preenchido com sucesso!");
        } catch (error) 
        {
            toastr.error("Erro ao buscar o CEP. Verifique se o CEP está no formato xxxxx-xxx.");
        }
    }

    $("#SeachCep").click(() => 
    {
        searchCep();
    });
});
