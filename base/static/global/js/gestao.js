document.addEventListener('DOMContentLoaded', function() {
    // Função para formatar moeda
    function formatCurrency(value) {
      return 'R$ ' + value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
    }
  
    // Função para formatar porcentagem
    function formatPercent(value) {
      return value.toFixed(2).replace('.', ',') + '%';
    }
  
    // Controle das abas
    const tabs = document.querySelectorAll('.gestao-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const target = this.getAttribute('data-tab');
        document.querySelectorAll('.gestao-content').forEach(content => {
          content.classList.remove('active');
        });
        document.getElementById(target).classList.add('active');
      });
    });
  
    // Função principal de cálculos
    function calculateAll() {
      // Cálculos Financeiros
      const receita = parseFloat(document.getElementById('receita').value) || 0;
      const custos = parseFloat(document.getElementById('custos').value) || 0;
      const lucro = receita - custos;
      const margemLucro = (lucro / receita) * 100 || 0;
      
      document.getElementById('lucro').textContent = formatCurrency(lucro);
      document.getElementById('margem-lucro').textContent = formatPercent(margemLucro);
  
      // Ponto de Equilíbrio
      const custosFixos = parseFloat(document.getElementById('custos-fixos').value) || 0;
      const precoVenda = parseFloat(document.getElementById('preco-venda').value) || 0;
      const custoVariavel = parseFloat(document.getElementById('custo-variavel').value) || 0;
      const pontoEquilibrio = custosFixos / (precoVenda - custoVariavel) || 0;
      
      document.getElementById('ponto-equilibrio').textContent = Math.ceil(pontoEquilibrio);
  
      // Giro de Estoque
      const custoVendas = parseFloat(document.getElementById('custo-vendas').value) || 0;
      const estoqueMedio = parseFloat(document.getElementById('estoque-medio').value) || 0;
      const giroEstoque = custoVendas / estoqueMedio || 0;
      
      document.getElementById('giro-estoque').textContent = giroEstoque.toFixed(2);
  
      // Valor Agregado
      const percentConcluido = parseFloat(document.getElementById('percent-concluido').value) || 0;
      const orcamentoTotal = parseFloat(document.getElementById('orcamento-total').value) || 0;
      const valorAgregado = (percentConcluido / 100) * orcamentoTotal;
      
      document.getElementById('valor-agregado').textContent = formatCurrency(valorAgregado);
  
      // Desvio de Prazo (SV)
      const valorAgregadoSV = parseFloat(document.getElementById('valor-agregado-sv').value) || valorAgregado;
      const valorPlanejado = parseFloat(document.getElementById('valor-planejado').value) || 0;
      const sv = valorAgregadoSV - valorPlanejado;
      
      document.getElementById('sv-resultado').textContent = formatCurrency(sv);
      document.getElementById('sv-interpretacao').textContent = 
        sv === 0 ? "SV = 0 Está exatamente no cronograma" :
        sv > 0 ? `SV = ${formatCurrency(sv)} Está adiantado em relação ao plano` :
        `SV = ${formatCurrency(sv)} Está atrasado em relação ao plano`;
  
      // Variação de Custo (CV)
      const valorAgregadoCV = parseFloat(document.getElementById('valor-agregado-cv').value) || valorAgregado;
      const custoReal = parseFloat(document.getElementById('custo-real').value) || 0;
      const cv = valorAgregadoCV - custoReal;
      
      document.getElementById('cv-resultado').textContent = formatCurrency(cv);
      document.getElementById('cv-interpretacao').textContent = 
        cv >= 0 ? "Resultado positivo: está economizando" : "Resultado negativo: está gastando demais";
    }
  
    // Event listeners para todos os inputs
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
      input.addEventListener('input', calculateAll);
    });
  
    // Botão Voltar ao Topo
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
      backToTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Inicializa cálculos
    calculateAll();
  });