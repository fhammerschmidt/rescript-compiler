(* Copyright (C) 2015-2016 Bloomberg Finance L.P.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * In addition to the permissions granted to you by the LGPL, you may combine
 * or link a "work that uses the Library" with a publicly distributed version
 * of this file to produce a combined library or application, then distribute
 * that combined work under the terms of your choosing, with no requirement
 * to comply with the obligations normally placed on you by section 4 of the
 * LGPL version 3 (or the corresponding section of a later version of the LGPL
 * should you choose to use a later version).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA. *)




let output_build
    ?(order_only_deps=[])
    ?(implicit_deps=[])
    ?(implicit_outputs=[])
    ~outputs
    ~inputs
    ~rule
    oc =
  let rule = Bsb_ninja_rule.get_name rule  oc in (* Trigger building if not used *)
  output_string oc "o";
  Ext_list.iter outputs (fun s -> output_string oc Ext_string.single_space ; output_string oc s  );
  if implicit_outputs <> [] then begin 
    output_string oc " |";
    Ext_list.iter implicit_outputs (fun s -> output_string oc Ext_string.single_space ; output_string oc s)
  end;
  output_string oc " : ";
  output_string oc rule;
  Ext_list.iter inputs (fun s ->   output_string oc Ext_string.single_space ; output_string oc s);
  if implicit_deps <> [] then 
    begin
      output_string oc " | ";
      Ext_list.iter implicit_deps (fun s -> output_string oc Ext_string.single_space; output_string oc s )
    end
  ;
  if order_only_deps <> [] then
    begin
      output_string oc " ||";                
      Ext_list.iter order_only_deps (fun s -> output_string oc Ext_string.single_space ; output_string oc s)
    end
  ;
  output_string oc "\n"

let phony ?(order_only_deps=[]) ~inputs ~output oc =
  output_string oc "o ";
  output_string oc output ;
  output_string oc " : ";
  output_string oc "phony";
  output_string oc Ext_string.single_space;
  Ext_list.iter inputs  (fun s ->   output_string oc Ext_string.single_space ; output_string oc s);
  if order_only_deps <> [] then 
    begin
      output_string oc " || ";                
      Ext_list.iter order_only_deps (fun s -> output_string oc Ext_string.single_space ; output_string oc s)
    end;
  output_string oc "\n"

let output_kv key value oc  =
  output_string oc key ;
  output_string oc " = ";
  output_string oc value ;
  output_string oc "\n"

let output_kvs kvs oc =
  Ext_array.iter kvs (fun (k,v) -> if v <> "" then output_kv k v oc) 


