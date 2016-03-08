// Generated CODE, PLEASE EDIT WITH CARE
'use strict';

var Caml_int64               = require("../runtime/caml_int64");
var Caml_builtin_exceptions  = require("../runtime/caml_builtin_exceptions");
var Pervasives               = require("./pervasives");
var Caml_format              = require("../runtime/caml_format");
var Printf                   = require("./printf");
var Caml_primitive           = require("../runtime/caml_primitive");
var CamlinternalFormatBasics = require("./camlinternalFormatBasics");
var Buffer                   = require("./buffer");
var Caml_curry               = require("../runtime/caml_curry");
var $$String                 = require("./string");
var Caml_string              = require("../runtime/caml_string");
var List                     = require("./list");
var CamlinternalFormat       = require("./camlinternalFormat");

var null_char = /* "\000" */0;

function next_char(ib) {
  try {
    var c = Caml_curry.app1(ib[6], /* () */0);
    ib[1] = c;
    ib[2] = /* true */1;
    ++ ib[3];
    if (c === /* "\n" */10) {
      ++ ib[4];
    }
    return c;
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.end_of_file) {
      ib[1] = null_char;
      ib[2] = /* false */0;
      ib[0] = /* true */1;
      return null_char;
    }
    else {
      throw exn;
    }
  }
}

function peek_char(ib) {
  if (ib[2]) {
    return ib[1];
  }
  else {
    return next_char(ib);
  }
}

function checked_peek_char(ib) {
  var c = peek_char(ib);
  if (ib[0]) {
    throw Caml_builtin_exceptions.end_of_file;
  }
  return c;
}

function end_of_input(ib) {
  peek_char(ib);
  return ib[0];
}

function beginning_of_input(ib) {
  return +(ib[3] === 0);
}

function name_of_input(ib) {
  var match = ib[8];
  if (typeof match === "number") {
    if (match) {
      return "unnamed function";
    }
    else {
      return "unnamed character string";
    }
  }
  else if (match.tag) {
    return "unnamed pervasives input channel";
  }
  else {
    return match[0];
  }
}

function char_count(ib) {
  if (ib[2]) {
    return ib[3] - 1;
  }
  else {
    return ib[3];
  }
}

function token(ib) {
  var tokbuf = ib[7];
  var tok = Buffer.contents(tokbuf);
  tokbuf[1] = 0;
  ++ ib[5];
  return tok;
}

function ignore_char(width, ib) {
  var width$1 = width - 1;
  ib[2] = /* false */0;
  return width$1;
}

function store_char(width, ib, c) {
  Buffer.add_char(ib[7], c);
  return ignore_char(width, ib);
}

function create(iname, next) {
  return /* record */[
          /* false */0,
          null_char,
          /* false */0,
          0,
          0,
          0,
          next,
          Buffer.create(1024),
          iname
        ];
}

function from_string(s) {
  var i = [0];
  var len = s.length;
  var next = function () {
    if (i[0] >= len) {
      throw Caml_builtin_exceptions.end_of_file;
    }
    else {
      var c = s.charCodeAt(i[0]);
      ++ i[0];
      return c;
    }
  };
  return create(/* From_string */0, next);
}

function from_function(param) {
  return create(/* From_function */1, param);
}

var file_buffer_size = [1024];

function scan_close_at_end(ic) {
  Caml_primitive.caml_ml_close_channel(ic);
  throw Caml_builtin_exceptions.end_of_file;
}

function scan_raise_at_end() {
  throw Caml_builtin_exceptions.end_of_file;
}

function from_ic(scan_close_ic, iname, ic) {
  var len = file_buffer_size[0];
  var buf = Caml_string.caml_create_string(len);
  var i = [0];
  var lim = [0];
  var eof = [/* false */0];
  var next = function () {
    if (i[0] < lim[0]) {
      var c = buf[i[0]];
      ++ i[0];
      return c;
    }
    else if (eof[0]) {
      throw Caml_builtin_exceptions.end_of_file;
    }
    else {
      lim[0] = Pervasives.input(ic, buf, 0, len);
      if (lim[0]) {
        i[0] = 1;
        return buf[0];
      }
      else {
        eof[0] = /* true */1;
        return Caml_curry.app1(scan_close_ic, ic);
      }
    }
  };
  return create(iname, next);
}

var stdin = from_ic(scan_raise_at_end, /* From_file */{
      0: "-",
      1: Pervasives.stdin,
      length: 2,
      tag: 0
    }, Pervasives.stdin);

function open_in(fname) {
  if (fname === "-") {
    return stdin;
  }
  else {
    var ic = Pervasives.open_in(fname);
    return from_ic(scan_close_at_end, /* From_file */{
                0: fname,
                1: ic,
                length: 2,
                tag: 0
              }, ic);
  }
}

function open_in_bin(fname) {
  if (fname === "-") {
    return stdin;
  }
  else {
    var ic = Pervasives.open_in_bin(fname);
    return from_ic(scan_close_at_end, /* From_file */{
                0: fname,
                1: ic,
                length: 2,
                tag: 0
              }, ic);
  }
}

var memo = [/* [] */0];

function memo_from_ic(scan_close_ic, ic) {
  try {
    return List.assq(ic, memo[0]);
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      var ib = from_ic(scan_close_ic, /* From_channel */{
            0: ic,
            length: 1,
            tag: 1
          }, ic);
      memo[0] = /* :: */[
        /* tuple */[
          ic,
          ib
        ],
        memo[0]
      ];
      return ib;
    }
    else {
      throw exn;
    }
  }
}

function from_channel(param) {
  return memo_from_ic(scan_raise_at_end, param);
}

function close_in(ib) {
  var match = ib[8];
  if (typeof match === "number") {
    return /* () */0;
  }
  else if (match.tag) {
    return Caml_primitive.caml_ml_close_channel(match[0]);
  }
  else {
    return Caml_primitive.caml_ml_close_channel(match[1]);
  }
}

var Scan_failure = {
  0: "Scanf.Scan_failure",
  1: Caml_builtin_exceptions.get_id(),
  length: 2,
  tag: 248
};

function bad_input_escape(c) {
  var s = Caml_curry.app1(Printf.sprintf(/* Format */{
            0: /* String_literal */{
              0: "illegal escape character ",
              1: /* Caml_char */{
                0: /* End_of_format */0,
                length: 1,
                tag: 1
              },
              length: 2,
              tag: 11
            },
            1: "illegal escape character %C",
            length: 2,
            tag: 0
          }), c);
  throw [
        Scan_failure,
        s
      ];
}

function bad_token_length(message) {
  var s = Caml_curry.app1(Printf.sprintf(/* Format */{
            0: /* String_literal */{
              0: "scanning of ",
              1: /* String */{
                0: /* No_padding */0,
                1: /* String_literal */{
                  0: " failed: the specified length was too short for token",
                  1: /* End_of_format */0,
                  length: 2,
                  tag: 11
                },
                length: 2,
                tag: 2
              },
              length: 2,
              tag: 11
            },
            1: "scanning of %s failed: the specified length was too short for token",
            length: 2,
            tag: 0
          }), message);
  throw [
        Scan_failure,
        s
      ];
}

function character_mismatch_err(c, ci) {
  return Caml_curry.app2(Printf.sprintf(/* Format */{
                  0: /* String_literal */{
                    0: "looking for ",
                    1: /* Caml_char */{
                      0: /* String_literal */{
                        0: ", found ",
                        1: /* Caml_char */{
                          0: /* End_of_format */0,
                          length: 1,
                          tag: 1
                        },
                        length: 2,
                        tag: 11
                      },
                      length: 1,
                      tag: 1
                    },
                    length: 2,
                    tag: 11
                  },
                  1: "looking for %C, found %C",
                  length: 2,
                  tag: 0
                }), c, ci);
}

function check_char(ib, _c) {
  while(true) {
    var c = _c;
    if (c === /* " " */32) {
      var ib$1 = ib;
      while(true) {
        var c$1 = peek_char(ib$1);
        if (ib$1[0]) {
          return 0;
        }
        else {
          var switcher = c$1 - 9;
          if (switcher > 4 || switcher < 0) {
            if (switcher !== 23) {
              return /* () */0;
            }
            else {
              ib$1[2] = /* false */0;
              continue ;
              
            }
          }
          else if (switcher === 3 || switcher === 2) {
            return /* () */0;
          }
          else {
            ib$1[2] = /* false */0;
            continue ;
            
          }
        }
      };
    }
    else {
      var ci = checked_peek_char(ib);
      if (ci === c) {
        ib[2] = /* false */0;
        return /* () */0;
      }
      else if (ci !== 13) {
        var s = character_mismatch_err(c, ci);
        throw [
              Scan_failure,
              s
            ];
      }
      else if (c === /* "\n" */10) {
        ib[2] = /* false */0;
        _c = /* "\n" */10;
        continue ;
        
      }
      else {
        var s$1 = character_mismatch_err(c, ci);
        throw [
              Scan_failure,
              s$1
            ];
      }
    }
  };
}

function token_char(ib) {
  return token(ib).charCodeAt(0);
}

function token_bool(ib) {
  var s = token(ib);
  switch (s) {
    case "false" : 
        return /* false */0;
    case "true" : 
        return /* true */1;
    default:
      var s$1 = Caml_curry.app1(Printf.sprintf(/* Format */{
                0: /* String_literal */{
                  0: "invalid boolean ",
                  1: /* Caml_string */{
                    0: /* No_padding */0,
                    1: /* End_of_format */0,
                    length: 2,
                    tag: 3
                  },
                  length: 2,
                  tag: 11
                },
                1: "invalid boolean %S",
                length: 2,
                tag: 0
              }), s);
      throw [
            Scan_failure,
            s$1
          ];
  }
}

function token_int_literal(conv, ib) {
  var tok;
  var exit = 0;
  var switcher = conv - 88;
  if (switcher > 32 || switcher < 0) {
    exit = 1;
  }
  else {
    switch (switcher) {
      case 10 : 
          tok = "0b" + token(ib);
          break;
      case 23 : 
          tok = "0o" + token(ib);
          break;
      case 12 : 
      case 17 : 
      case 29 : 
          tok = token(ib);
          break;
      case 1 : 
      case 2 : 
      case 3 : 
      case 4 : 
      case 5 : 
      case 6 : 
      case 7 : 
      case 8 : 
      case 9 : 
      case 11 : 
      case 13 : 
      case 14 : 
      case 15 : 
      case 16 : 
      case 18 : 
      case 19 : 
      case 20 : 
      case 21 : 
      case 22 : 
      case 24 : 
      case 25 : 
      case 26 : 
      case 27 : 
      case 28 : 
      case 30 : 
      case 31 : 
          exit = 1;
          break;
      case 0 : 
      case 32 : 
          tok = "0x" + token(ib);
          break;
      
    }
  }
  if (exit === 1) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "scanf.ml",
            507,
            11
          ]
        ];
  }
  var l = tok.length;
  if (l === 0 || tok.charCodeAt(0) !== /* "+" */43) {
    return tok;
  }
  else {
    return $$String.sub(tok, 1, l - 1);
  }
}

function token_float(ib) {
  return Caml_format.caml_float_of_string(token(ib));
}

function scan_decimal_digits(_width, ib) {
  while(true) {
    var width = _width;
    if (width) {
      var c = peek_char(ib);
      if (ib[0]) {
        return width;
      }
      else if (c >= 58) {
        if (c !== 95) {
          return width;
        }
        else {
          var width$1 = ignore_char(width, ib);
          _width = width$1;
          continue ;
          
        }
      }
      else if (c >= 48) {
        var width$2 = store_char(width, ib, c);
        _width = width$2;
        continue ;
        
      }
      else {
        return width;
      }
    }
    else {
      return width;
    }
  };
}

function scan_decimal_digits_plus(width, ib) {
  if (width) {
    var c = checked_peek_char(ib);
    if (c > 57 || c < 48) {
      var s = Caml_curry.app1(Printf.sprintf(/* Format */{
                0: /* String_literal */{
                  0: "character ",
                  1: /* Caml_char */{
                    0: /* String_literal */{
                      0: " is not a decimal digit",
                      1: /* End_of_format */0,
                      length: 2,
                      tag: 11
                    },
                    length: 1,
                    tag: 1
                  },
                  length: 2,
                  tag: 11
                },
                1: "character %C is not a decimal digit",
                length: 2,
                tag: 0
              }), c);
      throw [
            Scan_failure,
            s
          ];
    }
    else {
      var width$1 = store_char(width, ib, c);
      return scan_decimal_digits(width$1, ib);
    }
  }
  else {
    return bad_token_length("decimal digits");
  }
}

function scan_digits_plus(basis, digitp, width, ib) {
  if (width) {
    var c = checked_peek_char(ib);
    if (Caml_curry.app1(digitp, c)) {
      var _width = store_char(width, ib, c);
      while(true) {
        var width$1 = _width;
        if (width$1) {
          var c$1 = peek_char(ib);
          if (ib[0]) {
            return width$1;
          }
          else if (Caml_curry.app1(digitp, c$1)) {
            _width = store_char(width$1, ib, c$1);
            continue ;
            
          }
          else if (c$1 !== 95) {
            return width$1;
          }
          else {
            _width = ignore_char(width$1, ib);
            continue ;
            
          }
        }
        else {
          return width$1;
        }
      };
    }
    else {
      var s = Caml_curry.app2(Printf.sprintf(/* Format */{
                0: /* String_literal */{
                  0: "character ",
                  1: /* Caml_char */{
                    0: /* String_literal */{
                      0: " is not a valid ",
                      1: /* String */{
                        0: /* No_padding */0,
                        1: /* String_literal */{
                          0: " digit",
                          1: /* End_of_format */0,
                          length: 2,
                          tag: 11
                        },
                        length: 2,
                        tag: 2
                      },
                      length: 2,
                      tag: 11
                    },
                    length: 1,
                    tag: 1
                  },
                  length: 2,
                  tag: 11
                },
                1: "character %C is not a valid %s digit",
                length: 2,
                tag: 0
              }), c, basis);
      throw [
            Scan_failure,
            s
          ];
    }
  }
  else {
    return bad_token_length("digits");
  }
}

function is_binary_digit(param) {
  if (param === 49 || param === 48) {
    return /* true */1;
  }
  else {
    return /* false */0;
  }
}

function scan_binary_int(param, param$1) {
  return scan_digits_plus("binary", is_binary_digit, param, param$1);
}

function is_octal_digit(param) {
  if (param > 55 || param < 48) {
    return /* false */0;
  }
  else {
    return /* true */1;
  }
}

function scan_octal_int(param, param$1) {
  return scan_digits_plus("octal", is_octal_digit, param, param$1);
}

function is_hexa_digit(param) {
  var switcher = param - 48;
  if (switcher > 22 || switcher < 0) {
    if (switcher > 54 || switcher < 49) {
      return /* false */0;
    }
    else {
      return /* true */1;
    }
  }
  else if (switcher > 16 || switcher < 10) {
    return /* true */1;
  }
  else {
    return /* false */0;
  }
}

function scan_hexadecimal_int(param, param$1) {
  return scan_digits_plus("hexadecimal", is_hexa_digit, param, param$1);
}

function scan_sign(width, ib) {
  var c = checked_peek_char(ib);
  var switcher = c - 43;
  if (switcher > 2 || switcher < 0) {
    return width;
  }
  else {
    switch (switcher) {
      case 1 : 
          return width;
      case 0 : 
      case 2 : 
          return store_char(width, ib, c);
      
    }
  }
}

function scan_optionally_signed_decimal_int(width, ib) {
  var width$1 = scan_sign(width, ib);
  return scan_decimal_digits_plus(width$1, ib);
}

function scan_int_conv(conv, width, ib) {
  var exit = 0;
  var switcher = conv - 88;
  if (switcher > 32 || switcher < 0) {
    exit = 1;
  }
  else {
    switch (switcher) {
      case 10 : 
          return scan_binary_int(width, ib);
      case 12 : 
          return scan_optionally_signed_decimal_int(width, ib);
      case 17 : 
          var width$1 = width;
          var ib$1 = ib;
          var width$2 = scan_sign(width$1, ib$1);
          var width$3 = width$2;
          var ib$2 = ib$1;
          var c = checked_peek_char(ib$2);
          if (c !== 48) {
            return scan_decimal_digits_plus(width$3, ib$2);
          }
          else {
            var width$4 = store_char(width$3, ib$2, c);
            if (width$4) {
              var c$1 = peek_char(ib$2);
              if (ib$2[0]) {
                return width$4;
              }
              else if (c$1 >= 99) {
                if (c$1 !== 111) {
                  if (c$1 !== 120) {
                    return scan_decimal_digits(width$4, ib$2);
                  }
                  else {
                    return scan_hexadecimal_int(store_char(width$4, ib$2, c$1), ib$2);
                  }
                }
                else {
                  return scan_octal_int(store_char(width$4, ib$2, c$1), ib$2);
                }
              }
              else if (c$1 !== 88) {
                if (c$1 >= 98) {
                  return scan_binary_int(store_char(width$4, ib$2, c$1), ib$2);
                }
                else {
                  return scan_decimal_digits(width$4, ib$2);
                }
              }
              else {
                return scan_hexadecimal_int(store_char(width$4, ib$2, c$1), ib$2);
              }
            }
            else {
              return width$4;
            }
          }
      case 23 : 
          return scan_octal_int(width, ib);
      case 29 : 
          return scan_decimal_digits_plus(width, ib);
      case 1 : 
      case 2 : 
      case 3 : 
      case 4 : 
      case 5 : 
      case 6 : 
      case 7 : 
      case 8 : 
      case 9 : 
      case 11 : 
      case 13 : 
      case 14 : 
      case 15 : 
      case 16 : 
      case 18 : 
      case 19 : 
      case 20 : 
      case 21 : 
      case 22 : 
      case 24 : 
      case 25 : 
      case 26 : 
      case 27 : 
      case 28 : 
      case 30 : 
      case 31 : 
          exit = 1;
          break;
      case 0 : 
      case 32 : 
          return scan_hexadecimal_int(width, ib);
      
    }
  }
  if (exit === 1) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "scanf.ml",
            674,
            9
          ]
        ];
  }
  
}

function scan_frac_part(width, ib) {
  if (width) {
    var c = peek_char(ib);
    if (ib[0] || c > 57 || c < 48) {
      return width;
    }
    else {
      return scan_decimal_digits(store_char(width, ib, c), ib);
    }
  }
  else {
    return width;
  }
}

function scan_exp_part(width, ib) {
  if (width) {
    var c = peek_char(ib);
    if (ib[0] || c !== 69 && c !== 101) {
      return width;
    }
    else {
      return scan_optionally_signed_decimal_int(store_char(width, ib, c), ib);
    }
  }
  else {
    return width;
  }
}

function scan_int_part(width, ib) {
  var width$1 = scan_sign(width, ib);
  return scan_decimal_digits(width$1, ib);
}

function scan_float(width, precision, ib) {
  var width$1 = scan_int_part(width, ib);
  if (width$1) {
    var c = peek_char(ib);
    if (ib[0]) {
      return /* tuple */[
              width$1,
              precision
            ];
    }
    else if (c !== 46) {
      return /* tuple */[
              scan_exp_part(width$1, ib),
              precision
            ];
    }
    else {
      var width$2 = store_char(width$1, ib, c);
      var precision$1 = Pervasives.min(width$2, precision);
      var width$3 = width$2 - (precision$1 - scan_frac_part(precision$1, ib));
      return /* tuple */[
              scan_exp_part(width$3, ib),
              precision$1
            ];
    }
  }
  else {
    return /* tuple */[
            width$1,
            precision
          ];
  }
}

function scan_caml_float(width, precision, ib) {
  var width$1 = scan_optionally_signed_decimal_int(width, ib);
  if (width$1) {
    var c = peek_char(ib);
    if (ib[0]) {
      throw [
            Scan_failure,
            "no dot or exponent part found in float token"
          ];
    }
    else {
      var switcher = c - 69;
      if (switcher > 32 || switcher < 0) {
        if (switcher !== -23) {
          throw [
                Scan_failure,
                "no dot or exponent part found in float token"
              ];
        }
        else {
          var width$2 = store_char(width$1, ib, c);
          var precision$1 = Pervasives.min(width$2, precision);
          var width$3 = width$2 - (precision$1 - scan_frac_part(precision$1, ib));
          return scan_exp_part(width$3, ib);
        }
      }
      else if (switcher > 31 || switcher < 1) {
        return scan_exp_part(width$1, ib);
      }
      else {
        throw [
              Scan_failure,
              "no dot or exponent part found in float token"
            ];
      }
    }
  }
  else {
    throw [
          Scan_failure,
          "no dot or exponent part found in float token"
        ];
  }
}

function scan_string(stp, width, ib) {
  var _width = width;
  while(true) {
    var width$1 = _width;
    if (width$1) {
      var c = peek_char(ib);
      if (ib[0]) {
        return width$1;
      }
      else if (stp) {
        if (c === stp[0]) {
          ib[2] = /* false */0;
          return width$1;
        }
        else {
          _width = store_char(width$1, ib, c);
          continue ;
          
        }
      }
      else {
        var switcher = c - 9;
        if (switcher > 4 || switcher < 0) {
          if (switcher !== 23) {
            _width = store_char(width$1, ib, c);
            continue ;
            
          }
          else {
            return width$1;
          }
        }
        else if (switcher === 3 || switcher === 2) {
          _width = store_char(width$1, ib, c);
          continue ;
          
        }
        else {
          return width$1;
        }
      }
    }
    else {
      return width$1;
    }
  };
}

function scan_char(width, ib) {
  return store_char(width, ib, checked_peek_char(ib));
}

function char_for_backslash(c) {
  if (c >= 110) {
    if (c >= 117) {
      return c;
    }
    else {
      switch (c - 110) {
        case 0 : 
            return /* "\n" */10;
        case 4 : 
            return /* "\r" */13;
        case 1 : 
        case 2 : 
        case 3 : 
        case 5 : 
            return c;
        case 6 : 
            return /* "\t" */9;
        
      }
    }
  }
  else if (c !== 98) {
    return c;
  }
  else {
    return /* "\b" */8;
  }
}

function char_for_decimal_code(c0, c1, c2) {
  var c = 100 * (c0 - /* "0" */48) + 10 * (c1 - /* "0" */48) + (c2 - /* "0" */48);
  if (c < 0 || c > 255) {
    var s = Caml_curry.app3(Printf.sprintf(/* Format */{
              0: /* String_literal */{
                0: "bad character decimal encoding \\",
                1: /* Char */{
                  0: /* Char */{
                    0: /* Char */{
                      0: /* End_of_format */0,
                      length: 1,
                      tag: 0
                    },
                    length: 1,
                    tag: 0
                  },
                  length: 1,
                  tag: 0
                },
                length: 2,
                tag: 11
              },
              1: "bad character decimal encoding \\%c%c%c",
              length: 2,
              tag: 0
            }), c0, c1, c2);
    throw [
          Scan_failure,
          s
        ];
  }
  else {
    return Pervasives.char_of_int(c);
  }
}

function hexadecimal_value_of_char(c) {
  if (c >= /* "a" */97) {
    return c - 87;
  }
  else if (c >= /* "A" */65) {
    return c - 55;
  }
  else {
    return c - /* "0" */48;
  }
}

function char_for_hexadecimal_code(c1, c2) {
  var c = 16 * hexadecimal_value_of_char(c1) + hexadecimal_value_of_char(c2);
  if (c < 0 || c > 255) {
    var s = Caml_curry.app2(Printf.sprintf(/* Format */{
              0: /* String_literal */{
                0: "bad character hexadecimal encoding \\",
                1: /* Char */{
                  0: /* Char */{
                    0: /* End_of_format */0,
                    length: 1,
                    tag: 0
                  },
                  length: 1,
                  tag: 0
                },
                length: 2,
                tag: 11
              },
              1: "bad character hexadecimal encoding \\%c%c",
              length: 2,
              tag: 0
            }), c1, c2);
    throw [
          Scan_failure,
          s
        ];
  }
  else {
    return Pervasives.char_of_int(c);
  }
}

function check_next_char(message, width, ib) {
  if (width) {
    var c = peek_char(ib);
    if (ib[0]) {
      var message$1 = message;
      var s = Caml_curry.app1(Printf.sprintf(/* Format */{
                0: /* String_literal */{
                  0: "scanning of ",
                  1: /* String */{
                    0: /* No_padding */0,
                    1: /* String_literal */{
                      0: " failed: premature end of file occurred before end of token",
                      1: /* End_of_format */0,
                      length: 2,
                      tag: 11
                    },
                    length: 2,
                    tag: 2
                  },
                  length: 2,
                  tag: 11
                },
                1: "scanning of %s failed: premature end of file occurred before end of token",
                length: 2,
                tag: 0
              }), message$1);
      throw [
            Scan_failure,
            s
          ];
    }
    else {
      return c;
    }
  }
  else {
    return bad_token_length(message);
  }
}

function scan_backslash_char(width, ib) {
  var c = check_next_char("a Char", width, ib);
  var exit = 0;
  if (c >= 40) {
    if (c >= 58) {
      var switcher = c - 92;
      if (switcher > 28 || switcher < 0) {
        return bad_input_escape(c);
      }
      else {
        switch (switcher) {
          case 0 : 
          case 6 : 
          case 18 : 
          case 22 : 
          case 24 : 
              exit = 1;
              break;
          case 1 : 
          case 2 : 
          case 3 : 
          case 4 : 
          case 5 : 
          case 7 : 
          case 8 : 
          case 9 : 
          case 10 : 
          case 11 : 
          case 12 : 
          case 13 : 
          case 14 : 
          case 15 : 
          case 16 : 
          case 17 : 
          case 19 : 
          case 20 : 
          case 21 : 
          case 23 : 
          case 25 : 
          case 26 : 
          case 27 : 
              return bad_input_escape(c);
          case 28 : 
              var get_digit = function () {
                var c = next_char(ib);
                var switcher = c - 48;
                if (switcher > 22 || switcher < 0) {
                  if (switcher > 54 || switcher < 49) {
                    return bad_input_escape(c);
                  }
                  else {
                    return c;
                  }
                }
                else if (switcher > 16 || switcher < 10) {
                  return c;
                }
                else {
                  return bad_input_escape(c);
                }
              };
              var c1 = get_digit(/* () */0);
              var c2 = get_digit(/* () */0);
              return store_char(width - 2, ib, char_for_hexadecimal_code(c1, c2));
          
        }
      }
    }
    else if (c >= 48) {
      var get_digit$1 = function () {
        var c = next_char(ib);
        if (c > 57 || c < 48) {
          return bad_input_escape(c);
        }
        else {
          return c;
        }
      };
      var c1$1 = get_digit$1(/* () */0);
      var c2$1 = get_digit$1(/* () */0);
      return store_char(width - 2, ib, char_for_decimal_code(c, c1$1, c2$1));
    }
    else {
      return bad_input_escape(c);
    }
  }
  else if (c !== 34) {
    if (c >= 39) {
      exit = 1;
    }
    else {
      return bad_input_escape(c);
    }
  }
  else {
    exit = 1;
  }
  if (exit === 1) {
    return store_char(width, ib, char_for_backslash(c));
  }
  
}

function scan_caml_char(width, ib) {
  var find_stop = function (width) {
    var c = check_next_char("a Char", width, ib);
    if (c !== 39) {
      var s = character_mismatch_err(/* "'" */39, c);
      throw [
            Scan_failure,
            s
          ];
    }
    else {
      return ignore_char(width, ib);
    }
  };
  var width$1 = width;
  var c = checked_peek_char(ib);
  if (c !== 39) {
    var s = character_mismatch_err(/* "'" */39, c);
    throw [
          Scan_failure,
          s
        ];
  }
  else {
    var width$2 = ignore_char(width$1, ib);
    var c$1 = check_next_char("a Char", width$2, ib);
    if (c$1 !== 92) {
      return find_stop(store_char(width$2, ib, c$1));
    }
    else {
      return find_stop(scan_backslash_char(ignore_char(width$2, ib), ib));
    }
  }
}

function scan_caml_string(width, ib) {
  var find_stop = function (_width) {
    while(true) {
      var width = _width;
      var c = check_next_char("a String", width, ib);
      if (c !== 34) {
        if (c !== 92) {
          _width = store_char(width, ib, c);
          continue ;
          
        }
        else {
          var width$1 = ignore_char(width, ib);
          var match = check_next_char("a String", width$1, ib);
          if (match !== 10) {
            if (match !== 13) {
              return find_stop(scan_backslash_char(width$1, ib));
            }
            else {
              return skip_newline(ignore_char(width$1, ib));
            }
          }
          else {
            return skip_spaces(ignore_char(width$1, ib));
          }
        }
      }
      else {
        return ignore_char(width, ib);
      }
    };
  };
  var skip_spaces = function (_width) {
    while(true) {
      var width = _width;
      var match = check_next_char("a String", width, ib);
      if (match !== 32) {
        return find_stop(width);
      }
      else {
        _width = ignore_char(width, ib);
        continue ;
        
      }
    };
  };
  var width$1 = width;
  var c = checked_peek_char(ib);
  if (c !== 34) {
    var s = character_mismatch_err(/* "\"" */34, c);
    throw [
          Scan_failure,
          s
        ];
  }
  else {
    return find_stop(ignore_char(width$1, ib));
  }
}

function scan_bool(ib) {
  var c = checked_peek_char(ib);
  var m;
  if (c !== 102) {
    if (c !== 116) {
      var s = Caml_curry.app1(Printf.sprintf(/* Format */{
                0: /* String_literal */{
                  0: "the character ",
                  1: /* Caml_char */{
                    0: /* String_literal */{
                      0: " cannot start a boolean",
                      1: /* End_of_format */0,
                      length: 2,
                      tag: 11
                    },
                    length: 1,
                    tag: 1
                  },
                  length: 2,
                  tag: 11
                },
                1: "the character %C cannot start a boolean",
                length: 2,
                tag: 0
              }), c);
      throw [
            Scan_failure,
            s
          ];
    }
    else {
      m = 4;
    }
  }
  else {
    m = 5;
  }
  return scan_string(/* None */0, m, ib);
}

function scan_chars_in_char_set(char_set, scan_indic, width, ib) {
  var scan_chars = function (_i, stp) {
    while(true) {
      var i = _i;
      var c = peek_char(ib);
      if (i > 0 && !ib[0] && CamlinternalFormat.is_in_char_set(char_set, c) && c !== stp) {
        store_char(Pervasives.max_int, ib, c);
        _i = i - 1;
        continue ;
        
      }
      else {
        return 0;
      }
    };
  };
  if (scan_indic) {
    var c = scan_indic[0];
    scan_chars(width, c);
    if (ib[0]) {
      return 0;
    }
    else {
      var ci = peek_char(ib);
      if (c === ci) {
        ib[2] = /* false */0;
        return /* () */0;
      }
      else {
        var s = character_mismatch_err(c, ci);
        throw [
              Scan_failure,
              s
            ];
      }
    }
  }
  else {
    return scan_chars(width, -1);
  }
}

function scanf_bad_input(ib, x) {
  var exit = 0;
  var s;
  if (x[0] === Scan_failure) {
    s = x[1];
    exit = 1;
  }
  else if (x[0] === Caml_builtin_exceptions.failure) {
    s = x[1];
    exit = 1;
  }
  else {
    throw x;
  }
  if (exit === 1) {
    var i = char_count(ib);
    var s$1 = Caml_curry.app2(Printf.sprintf(/* Format */{
              0: /* String_literal */{
                0: "scanf: bad input at char number ",
                1: /* Int */{
                  0: /* Int_i */3,
                  1: /* No_padding */0,
                  2: /* No_precision */0,
                  3: /* String_literal */{
                    0: ": ",
                    1: /* Caml_string */{
                      0: /* No_padding */0,
                      1: /* End_of_format */0,
                      length: 2,
                      tag: 3
                    },
                    length: 2,
                    tag: 11
                  },
                  length: 4,
                  tag: 4
                },
                length: 2,
                tag: 11
              },
              1: "scanf: bad input at char number %i: %S",
              length: 2,
              tag: 0
            }), i, s);
    throw [
          Scan_failure,
          s$1
        ];
  }
  
}

function get_counter(ib, counter) {
  switch (counter) {
    case 0 : 
        return ib[4];
    case 1 : 
        return char_count(ib);
    case 2 : 
        return ib[5];
    
  }
}

function width_of_pad_opt(pad_opt) {
  if (pad_opt) {
    return pad_opt[0];
  }
  else {
    return Pervasives.max_int;
  }
}

function stopper_of_formatting_lit(fmting) {
  if (fmting === /* Escaped_percent */6) {
    return /* tuple */[
            /* "%" */37,
            ""
          ];
  }
  else {
    var str = CamlinternalFormat.string_of_formatting_lit(fmting);
    var stp = str.charCodeAt(1);
    var sub_str = $$String.sub(str, 2, str.length - 2);
    return /* tuple */[
            stp,
            sub_str
          ];
  }
}

function take_format_readers(k, _fmt) {
  while(true) {
    var fmt = _fmt;
    if (typeof fmt === "number") {
      return Caml_curry.app1(k, /* Nil */0);
    }
    else {
      switch (fmt.tag | 0) {
        case 4 : 
        case 5 : 
        case 6 : 
        case 7 : 
        case 8 : 
            _fmt = fmt[3];
            continue ;
            case 14 : 
            return take_fmtty_format_readers(k, CamlinternalFormatBasics.erase_rel(CamlinternalFormat.symm(fmt[1])), fmt[2]);
        case 18 : 
            var match = fmt[0];
            if (match.tag) {
              _fmt = CamlinternalFormatBasics.concat_fmt(match[0][0], fmt[1]);
              continue ;
              
            }
            else {
              _fmt = CamlinternalFormatBasics.concat_fmt(match[0][0], fmt[1]);
              continue ;
              
            }
            break;
        case 19 : 
            var fmt_rest = fmt[0];
            return (function(fmt_rest){
            return function (reader) {
              var new_k = function (readers_rest) {
                return Caml_curry.app1(k, /* Cons */{
                            0: reader,
                            1: readers_rest,
                            length: 2,
                            tag: 0
                          });
              };
              return take_format_readers(new_k, fmt_rest);
            }
            }(fmt_rest));
        case 2 : 
        case 3 : 
        case 11 : 
        case 12 : 
        case 17 : 
        case 21 : 
            _fmt = fmt[1];
            continue ;
            case 0 : 
        case 1 : 
        case 9 : 
        case 10 : 
        case 15 : 
        case 16 : 
        case 22 : 
            _fmt = fmt[0];
            continue ;
            case 23 : 
            var k$1 = k;
            var ign = fmt[0];
            var fmt$1 = fmt[1];
            if (typeof ign === "number") {
              switch (ign) {
                case 3 : 
                    return (function(k$1,fmt$1){
                    return function (reader) {
                      var new_k = function (readers_rest) {
                        return Caml_curry.app1(k$1, /* Cons */{
                                    0: reader,
                                    1: readers_rest,
                                    length: 2,
                                    tag: 0
                                  });
                      };
                      return take_format_readers(new_k, fmt$1);
                    }
                    }(k$1,fmt$1));
                case 0 : 
                case 1 : 
                case 2 : 
                case 4 : 
                    return take_format_readers(k$1, fmt$1);
                
              }
            }
            else {
              switch (ign.tag | 0) {
                case 8 : 
                    return take_fmtty_format_readers(k$1, ign[1], fmt$1);
                case 0 : 
                case 1 : 
                case 2 : 
                case 3 : 
                case 4 : 
                case 5 : 
                case 6 : 
                case 7 : 
                case 9 : 
                case 10 : 
                    return take_format_readers(k$1, fmt$1);
                
              }
            }
        case 13 : 
        case 20 : 
        case 24 : 
            _fmt = fmt[2];
            continue ;
            
      }
    }
  };
}

function take_fmtty_format_readers(k, _fmtty, fmt) {
  while(true) {
    var fmtty = _fmtty;
    if (typeof fmtty === "number") {
      return take_format_readers(k, fmt);
    }
    else {
      switch (fmtty.tag | 0) {
        case 8 : 
            _fmtty = fmtty[1];
            continue ;
            case 9 : 
            var ty = CamlinternalFormat.trans(CamlinternalFormat.symm(fmtty[0]), fmtty[1]);
            _fmtty = CamlinternalFormatBasics.concat_fmtty(ty, fmtty[2]);
            continue ;
            case 0 : 
        case 1 : 
        case 2 : 
        case 3 : 
        case 4 : 
        case 5 : 
        case 6 : 
        case 7 : 
        case 10 : 
        case 11 : 
        case 12 : 
            _fmtty = fmtty[0];
            continue ;
            case 13 : 
            var fmt_rest = fmtty[0];
            return (function(fmt_rest){
            return function (reader) {
              var new_k = function (readers_rest) {
                return Caml_curry.app1(k, /* Cons */{
                            0: reader,
                            1: readers_rest,
                            length: 2,
                            tag: 0
                          });
              };
              return take_fmtty_format_readers(new_k, fmt_rest, fmt);
            }
            }(fmt_rest));
        case 14 : 
            var fmt_rest$1 = fmtty[0];
            return (function(fmt_rest$1){
            return function (reader) {
              var new_k = function (readers_rest) {
                return Caml_curry.app1(k, /* Cons */{
                            0: reader,
                            1: readers_rest,
                            length: 2,
                            tag: 0
                          });
              };
              return take_fmtty_format_readers(new_k, fmt_rest$1, fmt);
            }
            }(fmt_rest$1));
        
      }
    }
  };
}

function make_scanf(ib, _fmt, readers) {
  while(true) {
    var fmt = _fmt;
    if (typeof fmt === "number") {
      return /* Nil */0;
    }
    else {
      switch (fmt.tag | 0) {
        case 0 : 
            scan_char(0, ib);
            var c = token_char(ib);
            return /* Cons */{
                    0: c,
                    1: make_scanf(ib, fmt[0], readers),
                    length: 2,
                    tag: 0
                  };
        case 1 : 
            scan_caml_char(0, ib);
            var c$1 = token_char(ib);
            return /* Cons */{
                    0: c$1,
                    1: make_scanf(ib, fmt[0], readers),
                    length: 2,
                    tag: 0
                  };
        case 2 : 
            var rest = fmt[1];
            var pad = fmt[0];
            var exit = 0;
            if (typeof rest === "number") {
              exit = 1;
            }
            else {
              switch (rest.tag | 0) {
                case 17 : 
                    var match = stopper_of_formatting_lit(rest[0]);
                    var stp = match[0];
                    var scan = (function(stp){
                    return function (width, _, ib) {
                      return scan_string(/* Some */[stp], width, ib);
                    }
                    }(stp));
                    var str_rest_000 = match[1];
                    var str_rest_001 = rest[1];
                    var str_rest = /* String_literal */{
                      0: str_rest_000,
                      1: str_rest_001,
                      length: 2,
                      tag: 11
                    };
                    return pad_prec_scanf(ib, str_rest, readers, pad, /* No_precision */0, scan, token);
                case 18 : 
                    var match$1 = rest[0];
                    if (match$1.tag) {
                      var scan$1 = function (width, _, ib) {
                        return scan_string(/* Some */[/* "[" */91], width, ib);
                      };
                      return pad_prec_scanf(ib, CamlinternalFormatBasics.concat_fmt(match$1[0][0], rest[1]), readers, pad, /* No_precision */0, scan$1, token);
                    }
                    else {
                      var scan$2 = function (width, _, ib) {
                        return scan_string(/* Some */[/* "{" */123], width, ib);
                      };
                      return pad_prec_scanf(ib, CamlinternalFormatBasics.concat_fmt(match$1[0][0], rest[1]), readers, pad, /* No_precision */0, scan$2, token);
                    }
                    break;
                default:
                  exit = 1;
              }
            }
            if (exit === 1) {
              var scan$3 = function (width, _, ib) {
                return scan_string(/* None */0, width, ib);
              };
              return pad_prec_scanf(ib, rest, readers, pad, /* No_precision */0, scan$3, token);
            }
            break;
        case 3 : 
            var scan$4 = function (width, _, ib) {
              return scan_caml_string(width, ib);
            };
            return pad_prec_scanf(ib, fmt[1], readers, fmt[0], /* No_precision */0, scan$4, token);
        case 4 : 
            var c$2 = CamlinternalFormat.char_of_iconv(fmt[0]);
            var scan$5 = (function(c$2){
            return function (width, _, ib) {
              return scan_int_conv(c$2, width, ib);
            }
            }(c$2));
            return pad_prec_scanf(ib, fmt[3], readers, fmt[1], fmt[2], scan$5, (function(c$2){
                      return function (param) {
                        return Caml_format.caml_int_of_string(token_int_literal(c$2, param));
                      }
                      }(c$2)));
        case 5 : 
            var c$3 = CamlinternalFormat.char_of_iconv(fmt[0]);
            var scan$6 = (function(c$3){
            return function (width, _, ib) {
              return scan_int_conv(c$3, width, ib);
            }
            }(c$3));
            return pad_prec_scanf(ib, fmt[3], readers, fmt[1], fmt[2], scan$6, (function(c$3){
                      return function (param) {
                        return Caml_format.caml_int32_of_string(token_int_literal(c$3, param));
                      }
                      }(c$3)));
        case 6 : 
            var c$4 = CamlinternalFormat.char_of_iconv(fmt[0]);
            var scan$7 = (function(c$4){
            return function (width, _, ib) {
              return scan_int_conv(c$4, width, ib);
            }
            }(c$4));
            return pad_prec_scanf(ib, fmt[3], readers, fmt[1], fmt[2], scan$7, (function(c$4){
                      return function (param) {
                        return Caml_format.caml_nativeint_of_string(token_int_literal(c$4, param));
                      }
                      }(c$4)));
        case 7 : 
            var c$5 = CamlinternalFormat.char_of_iconv(fmt[0]);
            var scan$8 = (function(c$5){
            return function (width, _, ib) {
              return scan_int_conv(c$5, width, ib);
            }
            }(c$5));
            return pad_prec_scanf(ib, fmt[3], readers, fmt[1], fmt[2], scan$8, (function(c$5){
                      return function (param) {
                        return Caml_int64.of_string(token_int_literal(c$5, param));
                      }
                      }(c$5)));
        case 8 : 
            if (fmt[0] >= 15) {
              return pad_prec_scanf(ib, fmt[3], readers, fmt[1], fmt[2], scan_caml_float, token_float);
            }
            else {
              return pad_prec_scanf(ib, fmt[3], readers, fmt[1], fmt[2], scan_float, token_float);
            }
        case 9 : 
            scan_bool(ib);
            var b = token_bool(ib);
            return /* Cons */{
                    0: b,
                    1: make_scanf(ib, fmt[0], readers),
                    length: 2,
                    tag: 0
                  };
        case 10 : 
            if (end_of_input(ib)) {
              _fmt = fmt[0];
              continue ;
              
            }
            else {
              throw [
                    Scan_failure,
                    "end of input not found"
                  ];
            }
            break;
        case 11 : 
            $$String.iter(function (param) {
                  return check_char(ib, param);
                }, fmt[0]);
            _fmt = fmt[1];
            continue ;
            case 12 : 
            check_char(ib, fmt[0]);
            _fmt = fmt[1];
            continue ;
            case 13 : 
            scan_caml_string(width_of_pad_opt(fmt[0]), ib);
            var s = token(ib);
            var fmt$1;
            try {
              fmt$1 = CamlinternalFormat.format_of_string_fmtty(s, fmt[1]);
            }
            catch (exn){
              if (exn[0] === Caml_builtin_exceptions.failure) {
                throw [
                      Scan_failure,
                      exn[1]
                    ];
              }
              else {
                throw exn;
              }
            }
            return /* Cons */{
                    0: fmt$1,
                    1: make_scanf(ib, fmt[2], readers),
                    length: 2,
                    tag: 0
                  };
        case 14 : 
            var fmtty = fmt[1];
            scan_caml_string(width_of_pad_opt(fmt[0]), ib);
            var s$1 = token(ib);
            var match$2;
            try {
              var match$3 = CamlinternalFormat.fmt_ebb_of_string(/* None */0, s$1);
              var match$4 = CamlinternalFormat.fmt_ebb_of_string(/* None */0, s$1);
              match$2 = /* tuple */[
                CamlinternalFormat.type_format(match$3[0], CamlinternalFormatBasics.erase_rel(fmtty)),
                CamlinternalFormat.type_format(match$4[0], CamlinternalFormatBasics.erase_rel(CamlinternalFormat.symm(fmtty)))
              ];
            }
            catch (exn$1){
              if (exn$1[0] === Caml_builtin_exceptions.failure) {
                throw [
                      Scan_failure,
                      exn$1[1]
                    ];
              }
              else {
                throw exn$1;
              }
            }
            return /* Cons */{
                    0: /* Format */{
                      0: match$2[0],
                      1: s$1,
                      length: 2,
                      tag: 0
                    },
                    1: make_scanf(ib, CamlinternalFormatBasics.concat_fmt(match$2[1], fmt[2]), readers),
                    length: 2,
                    tag: 0
                  };
        case 15 : 
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  'scanf: bad conversion "%a"'
                ];
        case 16 : 
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  'scanf: bad conversion "%t"'
                ];
        case 17 : 
            $$String.iter(function (param) {
                  return check_char(ib, param);
                }, CamlinternalFormat.string_of_formatting_lit(fmt[0]));
            _fmt = fmt[1];
            continue ;
            case 18 : 
            var match$5 = fmt[0];
            check_char(ib, /* "@" */64);
            if (match$5.tag) {
              check_char(ib, /* "[" */91);
              _fmt = CamlinternalFormatBasics.concat_fmt(match$5[0][0], fmt[1]);
              continue ;
              
            }
            else {
              check_char(ib, /* "{" */123);
              _fmt = CamlinternalFormatBasics.concat_fmt(match$5[0][0], fmt[1]);
              continue ;
              
            }
            break;
        case 19 : 
            var x = Caml_curry.app1(readers[0], ib);
            return /* Cons */{
                    0: x,
                    1: make_scanf(ib, fmt[0], readers[1]),
                    length: 2,
                    tag: 0
                  };
        case 20 : 
            var rest$1 = fmt[2];
            var char_set = fmt[1];
            var width_opt = fmt[0];
            var exit$1 = 0;
            if (typeof rest$1 === "number") {
              exit$1 = 1;
            }
            else if (rest$1.tag === 17) {
              var match$6 = stopper_of_formatting_lit(rest$1[0]);
              var width = width_of_pad_opt(width_opt);
              scan_chars_in_char_set(char_set, /* Some */[match$6[0]], width, ib);
              var s$2 = token(ib);
              var str_rest_000$1 = match$6[1];
              var str_rest_001$1 = rest$1[1];
              var str_rest$1 = /* String_literal */{
                0: str_rest_000$1,
                1: str_rest_001$1,
                length: 2,
                tag: 11
              };
              return /* Cons */{
                      0: s$2,
                      1: make_scanf(ib, str_rest$1, readers),
                      length: 2,
                      tag: 0
                    };
            }
            else {
              exit$1 = 1;
            }
            if (exit$1 === 1) {
              var width$1 = width_of_pad_opt(width_opt);
              scan_chars_in_char_set(char_set, /* None */0, width$1, ib);
              var s$3 = token(ib);
              return /* Cons */{
                      0: s$3,
                      1: make_scanf(ib, rest$1, readers),
                      length: 2,
                      tag: 0
                    };
            }
            break;
        case 21 : 
            var count = get_counter(ib, fmt[0]);
            return /* Cons */{
                    0: count,
                    1: make_scanf(ib, fmt[1], readers),
                    length: 2,
                    tag: 0
                  };
        case 22 : 
            var c$6 = checked_peek_char(ib);
            return /* Cons */{
                    0: c$6,
                    1: make_scanf(ib, fmt[0], readers),
                    length: 2,
                    tag: 0
                  };
        case 23 : 
            var match$7 = CamlinternalFormat.param_format_of_ignored_format(fmt[0], fmt[1]);
            var match$8 = make_scanf(ib, match$7[0], readers);
            if (match$8) {
              return match$8[1];
            }
            else {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    [
                      "scanf.ml",
                      1258,
                      13
                    ]
                  ];
            }
            break;
        case 24 : 
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  'scanf: bad conversion "%?" (custom converter)'
                ];
        
      }
    }
  };
}

function pad_prec_scanf(ib, fmt, readers, pad, prec, scan, token) {
  if (typeof pad === "number") {
    if (typeof prec === "number") {
      if (prec !== 0) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              'scanf: bad conversion "%*"'
            ];
      }
      else {
        Caml_curry.app3(scan, Pervasives.max_int, Pervasives.max_int, ib);
        var x = Caml_curry.app1(token, ib);
        return /* Cons */{
                0: x,
                1: make_scanf(ib, fmt, readers),
                length: 2,
                tag: 0
              };
      }
    }
    else {
      Caml_curry.app3(scan, Pervasives.max_int, prec[0], ib);
      var x$1 = Caml_curry.app1(token, ib);
      return /* Cons */{
              0: x$1,
              1: make_scanf(ib, fmt, readers),
              length: 2,
              tag: 0
            };
    }
  }
  else if (pad.tag) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          'scanf: bad conversion "%*"'
        ];
  }
  else if (pad[0] !== 0) {
    var w = pad[1];
    if (typeof prec === "number") {
      if (prec !== 0) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              'scanf: bad conversion "%*"'
            ];
      }
      else {
        Caml_curry.app3(scan, w, Pervasives.max_int, ib);
        var x$2 = Caml_curry.app1(token, ib);
        return /* Cons */{
                0: x$2,
                1: make_scanf(ib, fmt, readers),
                length: 2,
                tag: 0
              };
      }
    }
    else {
      Caml_curry.app3(scan, w, prec[0], ib);
      var x$3 = Caml_curry.app1(token, ib);
      return /* Cons */{
              0: x$3,
              1: make_scanf(ib, fmt, readers),
              length: 2,
              tag: 0
            };
    }
  }
  else {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          'scanf: bad conversion "%-"'
        ];
  }
}

function kscanf(ib, ef, param) {
  var str = param[1];
  var fmt = param[0];
  var k = function (readers, f) {
    Buffer.reset(ib[7]);
    var match;
    try {
      match = /* Args */{
        0: make_scanf(ib, fmt, readers),
        length: 1,
        tag: 0
      };
    }
    catch (exc){
      if (exc[0] === Scan_failure) {
        match = /* Exc */{
          0: exc,
          length: 1,
          tag: 1
        };
      }
      else if (exc[0] === Caml_builtin_exceptions.failure) {
        match = /* Exc */{
          0: exc,
          length: 1,
          tag: 1
        };
      }
      else if (exc === Caml_builtin_exceptions.end_of_file) {
        match = /* Exc */{
          0: exc,
          length: 1,
          tag: 1
        };
      }
      else if (exc[0] === Caml_builtin_exceptions.invalid_argument) {
        var s = exc[1] + (' in format "' + ($$String.escaped(str) + '"'));
        throw [
              Caml_builtin_exceptions.invalid_argument,
              s
            ];
      }
      else {
        throw exc;
      }
    }
    if (match.tag) {
      return Caml_curry.app2(ef, ib, match[0]);
    }
    else {
      var _f = f;
      var _args = match[0];
      while(true) {
        var args = _args;
        var f$1 = _f;
        if (args) {
          _args = args[1];
          _f = Caml_curry.app1(f$1, args[0]);
          continue ;
          
        }
        else {
          return f$1;
        }
      };
    }
  };
  return take_format_readers(k, fmt);
}

function ksscanf(s, ef, fmt) {
  return kscanf(from_string(s), ef, fmt);
}

function kfscanf(ic, ef, fmt) {
  return kscanf(memo_from_ic(scan_raise_at_end, ic), ef, fmt);
}

function bscanf(ib, fmt) {
  return kscanf(ib, scanf_bad_input, fmt);
}

function fscanf(ic, fmt) {
  return kscanf(memo_from_ic(scan_raise_at_end, ic), scanf_bad_input, fmt);
}

function sscanf(s, fmt) {
  return kscanf(from_string(s), scanf_bad_input, fmt);
}

function scanf(fmt) {
  return kscanf(stdin, scanf_bad_input, fmt);
}

function bscanf_format(ib, format, f) {
  scan_caml_string(Pervasives.max_int, ib);
  var str = token(ib);
  var $js;
  try {
    $js = CamlinternalFormat.format_of_string_format(str, format);
  }
  catch (exn){
    if (exn[0] === Caml_builtin_exceptions.failure) {
      throw [
            Scan_failure,
            exn[1]
          ];
    }
    else {
      throw exn;
    }
  }
  return Caml_curry.app1(f, $js);
}

function sscanf_format(s, format, f) {
  return bscanf_format(from_string(s), format, f);
}

function string_to_String(s) {
  var l = s.length;
  var b = Buffer.create(l + 2);
  Buffer.add_char(b, /* "\"" */34);
  for(var i = 0 ,i_finish = l - 1; i<= i_finish; ++i){
    var c = s.charCodeAt(i);
    if (c === /* "\"" */34) {
      Buffer.add_char(b, /* "\\" */92);
    }
    Buffer.add_char(b, c);
  }
  Buffer.add_char(b, /* "\"" */34);
  return Buffer.contents(b);
}

function format_from_string(s, fmt) {
  return sscanf_format(string_to_String(s), fmt, function (x) {
              return x;
            });
}

function unescaped(s) {
  return Caml_curry.app1(sscanf('"' + (s + '"'), /* Format */{
                  0: /* Caml_string */{
                    0: /* No_padding */0,
                    1: /* Flush */{
                      0: /* End_of_format */0,
                      length: 1,
                      tag: 10
                    },
                    length: 2,
                    tag: 3
                  },
                  1: "%S%!",
                  length: 2,
                  tag: 0
                }), function (x) {
              return x;
            });
}

var Scanning = [
  stdin,
  open_in,
  open_in_bin,
  close_in,
  open_in,
  open_in_bin,
  from_string,
  from_function,
  from_channel,
  end_of_input,
  beginning_of_input,
  name_of_input,
  stdin
];

exports.Scanning           = Scanning;
exports.Scan_failure       = Scan_failure;
exports.bscanf             = bscanf;
exports.fscanf             = fscanf;
exports.sscanf             = sscanf;
exports.scanf              = scanf;
exports.kscanf             = kscanf;
exports.ksscanf            = ksscanf;
exports.kfscanf            = kfscanf;
exports.bscanf_format      = bscanf_format;
exports.sscanf_format      = sscanf_format;
exports.format_from_string = format_from_string;
exports.unescaped          = unescaped;
/* stdin Not a pure module */
