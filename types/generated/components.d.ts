import type { Schema, Attribute } from '@strapi/strapi';

export interface DropdownDropdown extends Schema.Component {
  collectionName: 'components_dropdown_dropdowns';
  info: {
    displayName: 'Dropdown';
    icon: 'arrowDown';
  };
  attributes: {
    Titulo: Attribute.String;
    Texto: Attribute.Blocks;
  };
}

export interface EntradasEntradas extends Schema.Component {
  collectionName: 'components_entradas_entradas';
  info: {
    displayName: 'Entradas';
    icon: 'archive';
    description: '';
  };
  attributes: {
    Titulo: Attribute.String;
    Item: Attribute.Component<'prices.nombre', true>;
    Tipo: Attribute.Enumeration<['General', 'Vip']> &
      Attribute.DefaultTo<'General'>;
    Link_entradas: Attribute.String;
  };
}

export interface FilterFiltros extends Schema.Component {
  collectionName: 'components_filter_filtros';
  info: {
    displayName: 'Filtros';
    icon: 'cloud';
  };
  attributes: {
    Filtro: Attribute.String;
    Imagen: Attribute.Media;
    Nombre: Attribute.String;
  };
}

export interface InfoInformacion extends Schema.Component {
  collectionName: 'components_info_informacions';
  info: {
    displayName: 'Informacion';
    icon: 'bold';
  };
  attributes: {
    Ruta: Attribute.String;
    Punto_de_referencia: Attribute.String;
  };
}

export interface ItemsItems extends Schema.Component {
  collectionName: 'components_items_items';
  info: {
    displayName: 'Items';
    icon: 'alien';
  };
  attributes: {
    Texto: Attribute.Text;
  };
}

export interface MapaMapa extends Schema.Component {
  collectionName: 'components_mapa_mapas';
  info: {
    displayName: 'Mapa';
    icon: 'apps';
  };
  attributes: {
    Filtro: Attribute.String;
    Imagen: Attribute.Media;
  };
}

export interface PricesNombre extends Schema.Component {
  collectionName: 'components_prices_nombres';
  info: {
    displayName: 'Nombre';
    icon: 'discuss';
  };
  attributes: {
    Nombre: Attribute.String;
    Precio: Attribute.String;
  };
}

export interface TransmileniosTransmilenio extends Schema.Component {
  collectionName: 'components_transmilenios_transmilenio_s';
  info: {
    displayName: 'Transmilenio  ';
    icon: 'strikeThrough';
  };
  attributes: {
    Titulo: Attribute.String;
    Informacion: Attribute.Component<'info.informacion', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'dropdown.dropdown': DropdownDropdown;
      'entradas.entradas': EntradasEntradas;
      'filter.filtros': FilterFiltros;
      'info.informacion': InfoInformacion;
      'items.items': ItemsItems;
      'mapa.mapa': MapaMapa;
      'prices.nombre': PricesNombre;
      'transmilenios.transmilenio': TransmileniosTransmilenio;
    }
  }
}
