import test from "node:test";import assert from "node:assert/strict";import {validateJob,nextRun,runWithRetry} from "../src/runner.js";
test("rejects unsupported runtime",()=>assert.throws(()=>validateJob({name:"x",runtime:"shell"}),/runtime/));
test("requires URL for http jobs",()=>assert.throws(()=>validateJob({name:"x",runtime:"http"}),/url/));
test("calculates cron next run",()=>assert.ok(nextRun("*/5 * * * *",new Date()).getTime()>Date.now()-1000));
test("retries failures",async()=>{let n=0;const out=await runWithRetry(async()=>{if(++n<2)throw Error("x");return "ok"},{maxRetries:1,backoffMs:1});assert.equal(out,"ok");assert.equal(n,2);});