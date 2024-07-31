const locators = {
   CARRINHO_ITENS: {
      PRIMEIRO:'#item_2_title_link > .inventory_item_name',
      SEGUNDO:'#item_0_title_link > .inventory_item_name',
      TERCEIRO:'#item_1_title_link > .inventory_item_name'
   },
   LISTAGEM_ITENS: {
    PRIMEIRO:'.inventory_list > :nth-child(1)',
    SEGUNDO:'.inventory_list > :nth-child(2)',
    TERCEIRO:'.inventory_list > :nth-child(3)'
   }



}

export default locators