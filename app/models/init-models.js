var DataTypes = require("sequelize").DataTypes;
var _ctl_tipo_archivo = require("./ctl_tipo_archivo");
var _ctl_tipo_aviso = require("./ctl_tipo_aviso");
var _ctl_tipo_contacto = require("./ctl_tipo_contacto");
var _ctl_tipo_promocion = require("./ctl_tipo_promocion");
var _mnt_metodo_autenticacion = require("./mnt_metodo_autenticacion");
var _mnt_metodo_autenticacion_usuario = require("./mnt_metodo_autenticacion_usuario");
var _mnt_perfil = require("./mnt_perfil");
var _mnt_perfil_rol = require("./mnt_perfil_rol");
var _mnt_rol = require("./mnt_rol");
var _mnt_ruta = require("./mnt_ruta");
var _mnt_ruta_rol = require("./mnt_ruta_rol");
var _mnt_usuario = require("./mnt_usuario");
var _mnt_usuario_perfil = require("./mnt_usuario_perfil");
var _mnt_usuario_rol = require("./mnt_usuario_rol");
var _promo_archivo = require("./promo_archivo");
var _promo_aviso = require("./promo_aviso");
var _promo_categoria = require("./promo_categoria");
var _promo_categoria_promo_establecimiento = require("./promo_categoria_promo_establecimiento");
var _promo_contacto = require("./promo_contacto");
var _promo_establecimiento = require("./promo_establecimiento");
var _promo_promociones = require("./promo_promociones");
var _promo_sucursal = require("./promo_sucursal");
var _promo_sucursal_promo_promocion = require("./promo_sucursal_promo_promocion");
var _refresh_tokens = require("./refresh_tokens");

function initModels(sequelize) {
  var ctl_tipo_archivo = _ctl_tipo_archivo(sequelize, DataTypes);
  var ctl_tipo_aviso = _ctl_tipo_aviso(sequelize, DataTypes);
  var ctl_tipo_contacto = _ctl_tipo_contacto(sequelize, DataTypes);
  var ctl_tipo_promocion = _ctl_tipo_promocion(sequelize, DataTypes);
  var mnt_metodo_autenticacion = _mnt_metodo_autenticacion(sequelize, DataTypes);
  var mnt_metodo_autenticacion_usuario = _mnt_metodo_autenticacion_usuario(sequelize, DataTypes);
  var mnt_perfil = _mnt_perfil(sequelize, DataTypes);
  var mnt_perfil_rol = _mnt_perfil_rol(sequelize, DataTypes);
  var mnt_rol = _mnt_rol(sequelize, DataTypes);
  var mnt_ruta = _mnt_ruta(sequelize, DataTypes);
  var mnt_ruta_rol = _mnt_ruta_rol(sequelize, DataTypes);
  var mnt_usuario = _mnt_usuario(sequelize, DataTypes);
  var mnt_usuario_perfil = _mnt_usuario_perfil(sequelize, DataTypes);
  var mnt_usuario_rol = _mnt_usuario_rol(sequelize, DataTypes);
  var promo_archivo = _promo_archivo(sequelize, DataTypes);
  var promo_aviso = _promo_aviso(sequelize, DataTypes);
  var promo_categoria = _promo_categoria(sequelize, DataTypes);
  var promo_categoria_promo_establecimiento = _promo_categoria_promo_establecimiento(sequelize, DataTypes);
  var promo_contacto = _promo_contacto(sequelize, DataTypes);
  var promo_establecimiento = _promo_establecimiento(sequelize, DataTypes);
  var promo_promociones = _promo_promociones(sequelize, DataTypes);
  var promo_sucursal = _promo_sucursal(sequelize, DataTypes);
  var promo_sucursal_promo_promocion = _promo_sucursal_promo_promocion(sequelize, DataTypes);
  var refresh_tokens = _refresh_tokens(sequelize, DataTypes);

  mnt_rol.belongsToMany(mnt_usuario, { as: 'id_usuario_mnt_usuarios', through: mnt_usuario_rol, foreignKey: "id_rol", otherKey: "id_usuario" });
  mnt_usuario.belongsToMany(mnt_rol, { as: 'id_rol_mnt_rols', through: mnt_usuario_rol, foreignKey: "id_usuario", otherKey: "id_rol" });
  promo_archivo.belongsTo(ctl_tipo_archivo, { as: "id_tipo_archivo_ctl_tipo_archivo", foreignKey: "id_tipo_archivo"});
  ctl_tipo_archivo.hasMany(promo_archivo, { as: "promo_archivos", foreignKey: "id_tipo_archivo"});
  promo_aviso.belongsTo(ctl_tipo_aviso, { as: "id_tipo_aviso_ctl_tipo_aviso", foreignKey: "id_tipo_aviso"});
  ctl_tipo_aviso.hasMany(promo_aviso, { as: "promo_avisos", foreignKey: "id_tipo_aviso"});
  promo_contacto.belongsTo(ctl_tipo_contacto, { as: "id_tipo_contacto_ctl_tipo_contacto", foreignKey: "id_tipo_contacto"});
  ctl_tipo_contacto.hasMany(promo_contacto, { as: "promo_contactos", foreignKey: "id_tipo_contacto"});
  promo_promociones.belongsTo(ctl_tipo_promocion, { as: "id_tipo_promocion_ctl_tipo_promocion", foreignKey: "id_tipo_promocion"});
  ctl_tipo_promocion.hasMany(promo_promociones, { as: "promo_promociones", foreignKey: "id_tipo_promocion"});
  mnt_metodo_autenticacion_usuario.belongsTo(mnt_metodo_autenticacion, { as: "id_metodo_mnt_metodo_autenticacion", foreignKey: "id_metodo"});
  mnt_metodo_autenticacion.hasMany(mnt_metodo_autenticacion_usuario, { as: "mnt_metodo_autenticacion_usuarios", foreignKey: "id_metodo"});
  mnt_perfil_rol.belongsTo(mnt_perfil, { as: "id_perfil_mnt_perfil", foreignKey: "id_perfil"});
  mnt_perfil.hasMany(mnt_perfil_rol, { as: "mnt_perfil_rols", foreignKey: "id_perfil"});
  mnt_usuario_perfil.belongsTo(mnt_perfil, { as: "id_perfil_mnt_perfil", foreignKey: "id_perfil"});
  mnt_perfil.hasMany(mnt_usuario_perfil, { as: "mnt_usuario_perfils", foreignKey: "id_perfil"});
  mnt_perfil_rol.belongsTo(mnt_rol, { as: "id_rol_mnt_rol", foreignKey: "id_rol"});
  mnt_rol.hasMany(mnt_perfil_rol, { as: "mnt_perfil_rols", foreignKey: "id_rol"});
  mnt_ruta_rol.belongsTo(mnt_rol, { as: "id_rol_mnt_rol", foreignKey: "id_rol"});
  mnt_rol.hasMany(mnt_ruta_rol, { as: "mnt_ruta_rols", foreignKey: "id_rol"});
  mnt_usuario_rol.belongsTo(mnt_rol, { as: "id_rol_mnt_rol", foreignKey: "id_rol"});
  mnt_rol.hasMany(mnt_usuario_rol, { as: "mnt_usuario_rols", foreignKey: "id_rol"});
  mnt_ruta_rol.belongsTo(mnt_ruta, { as: "id_ruta_mnt_rutum", foreignKey: "id_ruta"});
  mnt_ruta.hasMany(mnt_ruta_rol, { as: "mnt_ruta_rols", foreignKey: "id_ruta"});
  mnt_metodo_autenticacion_usuario.belongsTo(mnt_usuario, { as: "id_usuario_mnt_usuario", foreignKey: "id_usuario"});
  mnt_usuario.hasMany(mnt_metodo_autenticacion_usuario, { as: "mnt_metodo_autenticacion_usuarios", foreignKey: "id_usuario"});
  mnt_usuario_perfil.belongsTo(mnt_usuario, { as: "id_usuario_mnt_usuario", foreignKey: "id_usuario"});
  mnt_usuario.hasMany(mnt_usuario_perfil, { as: "mnt_usuario_perfils", foreignKey: "id_usuario"});
  mnt_usuario_rol.belongsTo(mnt_usuario, { as: "id_usuario_mnt_usuario", foreignKey: "id_usuario"});
  mnt_usuario.hasMany(mnt_usuario_rol, { as: "mnt_usuario_rols", foreignKey: "id_usuario"});
  refresh_tokens.belongsTo(mnt_usuario, { as: "id_usuario_mnt_usuario", foreignKey: "id_usuario"});
  mnt_usuario.hasMany(refresh_tokens, { as: "refresh_tokens", foreignKey: "id_usuario"});
  promo_categoria_promo_establecimiento.belongsTo(promo_categoria, { as: "id_categoria_promo_categorium", foreignKey: "id_categoria"});
  promo_categoria.hasMany(promo_categoria_promo_establecimiento, { as: "promo_categoria_promo_establecimientos", foreignKey: "id_categoria"});
  promo_archivo.belongsTo(promo_establecimiento, { as: "id_relacion_promo_establecimiento", foreignKey: "id_relacion"});
  promo_establecimiento.hasMany(promo_archivo, { as: "promo_archivos", foreignKey: "id_relacion"});
  promo_categoria_promo_establecimiento.belongsTo(promo_establecimiento, { as: "id_establecimiento_promo_establecimiento", foreignKey: "id_establecimiento"});
  promo_establecimiento.hasMany(promo_categoria_promo_establecimiento, { as: "promo_categoria_promo_establecimientos", foreignKey: "id_establecimiento"});
  promo_promociones.belongsTo(promo_establecimiento, { as: "id_establecimiento_promo_establecimiento", foreignKey: "id_establecimiento"});
  promo_establecimiento.hasMany(promo_promociones, { as: "promo_promociones", foreignKey: "id_establecimiento"});
  promo_sucursal.belongsTo(promo_establecimiento, { as: "id_establecimiento_promo_establecimiento", foreignKey: "id_establecimiento"});
  promo_establecimiento.hasMany(promo_sucursal, { as: "promo_sucursals", foreignKey: "id_establecimiento"});
  promo_sucursal_promo_promocion.belongsTo(promo_promociones, { as: "id_promocion_promo_promocione", foreignKey: "id_promocion"});
  promo_promociones.hasMany(promo_sucursal_promo_promocion, { as: "promo_sucursal_promo_promocions", foreignKey: "id_promocion"});
  promo_contacto.belongsTo(promo_sucursal, { as: "id_relacion_promo_sucursal", foreignKey: "id_relacion"});
  promo_sucursal.hasMany(promo_contacto, { as: "promo_contactos", foreignKey: "id_relacion"});
  promo_sucursal_promo_promocion.belongsTo(promo_sucursal, { as: "id_sucursal_promo_sucursal", foreignKey: "id_sucursal"});
  promo_sucursal.hasMany(promo_sucursal_promo_promocion, { as: "promo_sucursal_promo_promocions", foreignKey: "id_sucursal"});

  return {
    ctl_tipo_archivo,
    ctl_tipo_aviso,
    ctl_tipo_contacto,
    ctl_tipo_promocion,
    mnt_metodo_autenticacion,
    mnt_metodo_autenticacion_usuario,
    mnt_perfil,
    mnt_perfil_rol,
    mnt_rol,
    mnt_ruta,
    mnt_ruta_rol,
    mnt_usuario,
    mnt_usuario_perfil,
    mnt_usuario_rol,
    promo_archivo,
    promo_aviso,
    promo_categoria,
    promo_categoria_promo_establecimiento,
    promo_contacto,
    promo_establecimiento,
    promo_promociones,
    promo_sucursal,
    promo_sucursal_promo_promocion,
    refresh_tokens,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
