import test from "node:test";import assert from "node:assert/strict";import {authenticate,handleMcp} from "../src/mcp.js";
test("auth accepts configured bearer token",()=>assert.equal(authenticate({authorization:"Bearer abc"},"abc"),true));
test("auth rejects missing token when configured",()=>assert.equal(authenticate({},"abc"),false));
test("initialize returns protocol capabilities",async()=>{const r=await handleMcp({jsonrpc:"2.0",id:1,method:"initialize",params:{}},{store:{}});assert.equal(r.jsonrpc,"2.0");assert.equal(r.id,1);assert.ok(r.result.capabilities.tools)});
test("tools/list exposes runner tools",async()=>{const r=await handleMcp({jsonrpc:"2.0",id:2,method:"tools/list"},{store:{}});assert.ok(r.result.tools.some(x=>x.name==="create_job"));assert.ok(r.result.tools.some(x=>x.name==="health_check"))});
test("unknown MCP method returns JSON-RPC method-not-found",async()=>{const r=await handleMcp({jsonrpc:"2.0",id:3,method:"wat"},{store:{}});assert.equal(r.error.code,-32601)});