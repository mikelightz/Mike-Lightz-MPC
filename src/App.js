import React from "react";
import "./App.css";

const buttons = [
  {
    id: "Chord 1",
    letter: "Q",
    src: "https://mike-lightz-beat-machine-sounds.s3.us-east-1.amazonaws.com/load/OS_BB_130_G%23M_BRASSETTE_THICK_SYNTH_CHORDS.wav?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCID%2Bu1ABcL%2FZuTaPilAuiZhgLkb1sbHtrwMW4rWECtmiCAiEA5a6PIfh0LGBI0MRsSb%2FpxIgcgBOeg97afcVM9UrAhbAq7QIIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0ODExMjQ4NTIxMjciDDDPwDuv69333YUSZyrBAiEkcP06Q8u9%2BKXbGY%2FKb5i6dTmPVYEWfkR%2FNQoE9fab7X6Wwm1jWEQ4hgLU5PE7qut97zzD1Qng6wsjFI1ZmWXz5qkFQIBy1YRClAfNj8cqt03cVPQVWtPn6d89ZP648OoI5g3PInNRs6QHsXjME9o%2FZPUaNLP5yZuxDXQYaR9KA5SzB1JUUJFVL%2F7hBTDd99WwsbQ0lh3iwo1isz90Xko90izY4%2FFzPeaOSaCbnJzC9665Qd%2FYQDXuam3UdhnawdiSRdXTJl1hx7jbe9LljfDR%2FnScTEuRNo6oxyp5duIDIGXB2AMpNb4KwqUz%2BHOJz5GrdIuSEPA3WBp%2FzTjvHjKY12O4WVmsgtg15Ii8NF2Oxm1ofWTi1I4XEakus0mIrThQs%2F3XfpWAkKEgSBlZXvTfxCAuVnq%2FOv%2B69mup9OkBBDCthPWbBjqzAlc%2BahWNnLUIlYCFZHJezthuCl%2BYNh8lf2mdxUUSzMdq9pkY%2Bmi91PlyouOfXj11fXZZ8YFXcMz0P0bgBB7X0OxxN1QdtCYafv1vI5T0Gx9frshXyEaH0OktwYGFPK8xd4frs6WX%2B5AXL5BNirIqm03ezmlhPkClNlY1lpwy8sZ4Mk5HeZQXKA7qzt3QA4ReTQ%2F5afMyxGMgSwOTrPaCge6eUc1m3ERxdYhQE%2BlBsW1oE2e6H6c7hyrVscXHy7SFnpnyBP10bmNTKRlk%2F2hLaeTG3hsKmbSUF4kiBsExzIk9uzQf%2B6qmYaa%2BdbGcmfRdR61hzgu2Ks1gNsTQWSf2rWT3zo%2BI4fJoV%2F9RmrZPYK2laCMArKRjuYiMF2pu7w6zG%2B%2BW0U6zXKWKEOGr0Qx%2BpxHelM4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221122T221519Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXABKGUGP2Y3B2MVL%2F20221122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f8fdb63e82ad771067de63e79ed55a9b4fdb467b326a4bc85f76ca745415f91a",
  },
  {
    id: "Chord 2",
    letter: "W",
    src: "https://mike-lightz-beat-machine-sounds.s3.us-east-1.amazonaws.com/load/SO_3WRB_V1_FR3_SYNTH_chord_one_Shot_Ab_minor_01.wav?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCID%2Bu1ABcL%2FZuTaPilAuiZhgLkb1sbHtrwMW4rWECtmiCAiEA5a6PIfh0LGBI0MRsSb%2FpxIgcgBOeg97afcVM9UrAhbAq7QIIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0ODExMjQ4NTIxMjciDDDPwDuv69333YUSZyrBAiEkcP06Q8u9%2BKXbGY%2FKb5i6dTmPVYEWfkR%2FNQoE9fab7X6Wwm1jWEQ4hgLU5PE7qut97zzD1Qng6wsjFI1ZmWXz5qkFQIBy1YRClAfNj8cqt03cVPQVWtPn6d89ZP648OoI5g3PInNRs6QHsXjME9o%2FZPUaNLP5yZuxDXQYaR9KA5SzB1JUUJFVL%2F7hBTDd99WwsbQ0lh3iwo1isz90Xko90izY4%2FFzPeaOSaCbnJzC9665Qd%2FYQDXuam3UdhnawdiSRdXTJl1hx7jbe9LljfDR%2FnScTEuRNo6oxyp5duIDIGXB2AMpNb4KwqUz%2BHOJz5GrdIuSEPA3WBp%2FzTjvHjKY12O4WVmsgtg15Ii8NF2Oxm1ofWTi1I4XEakus0mIrThQs%2F3XfpWAkKEgSBlZXvTfxCAuVnq%2FOv%2B69mup9OkBBDCthPWbBjqzAlc%2BahWNnLUIlYCFZHJezthuCl%2BYNh8lf2mdxUUSzMdq9pkY%2Bmi91PlyouOfXj11fXZZ8YFXcMz0P0bgBB7X0OxxN1QdtCYafv1vI5T0Gx9frshXyEaH0OktwYGFPK8xd4frs6WX%2B5AXL5BNirIqm03ezmlhPkClNlY1lpwy8sZ4Mk5HeZQXKA7qzt3QA4ReTQ%2F5afMyxGMgSwOTrPaCge6eUc1m3ERxdYhQE%2BlBsW1oE2e6H6c7hyrVscXHy7SFnpnyBP10bmNTKRlk%2F2hLaeTG3hsKmbSUF4kiBsExzIk9uzQf%2B6qmYaa%2BdbGcmfRdR61hzgu2Ks1gNsTQWSf2rWT3zo%2BI4fJoV%2F9RmrZPYK2laCMArKRjuYiMF2pu7w6zG%2B%2BW0U6zXKWKEOGr0Qx%2BpxHelM4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221122T221647Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXABKGUGP2Y3B2MVL%2F20221122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=69d57eed77a5e24a439fb352685484063ad4840a25fa7eef5428f6395383648b",
  },
  {
    id: "Snap",
    letter: "E",
    src: "https://mike-lightz-beat-machine-sounds.s3.us-east-1.amazonaws.com/load/Snap_SafePlace.wav?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCID%2Bu1ABcL%2FZuTaPilAuiZhgLkb1sbHtrwMW4rWECtmiCAiEA5a6PIfh0LGBI0MRsSb%2FpxIgcgBOeg97afcVM9UrAhbAq7QIIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0ODExMjQ4NTIxMjciDDDPwDuv69333YUSZyrBAiEkcP06Q8u9%2BKXbGY%2FKb5i6dTmPVYEWfkR%2FNQoE9fab7X6Wwm1jWEQ4hgLU5PE7qut97zzD1Qng6wsjFI1ZmWXz5qkFQIBy1YRClAfNj8cqt03cVPQVWtPn6d89ZP648OoI5g3PInNRs6QHsXjME9o%2FZPUaNLP5yZuxDXQYaR9KA5SzB1JUUJFVL%2F7hBTDd99WwsbQ0lh3iwo1isz90Xko90izY4%2FFzPeaOSaCbnJzC9665Qd%2FYQDXuam3UdhnawdiSRdXTJl1hx7jbe9LljfDR%2FnScTEuRNo6oxyp5duIDIGXB2AMpNb4KwqUz%2BHOJz5GrdIuSEPA3WBp%2FzTjvHjKY12O4WVmsgtg15Ii8NF2Oxm1ofWTi1I4XEakus0mIrThQs%2F3XfpWAkKEgSBlZXvTfxCAuVnq%2FOv%2B69mup9OkBBDCthPWbBjqzAlc%2BahWNnLUIlYCFZHJezthuCl%2BYNh8lf2mdxUUSzMdq9pkY%2Bmi91PlyouOfXj11fXZZ8YFXcMz0P0bgBB7X0OxxN1QdtCYafv1vI5T0Gx9frshXyEaH0OktwYGFPK8xd4frs6WX%2B5AXL5BNirIqm03ezmlhPkClNlY1lpwy8sZ4Mk5HeZQXKA7qzt3QA4ReTQ%2F5afMyxGMgSwOTrPaCge6eUc1m3ERxdYhQE%2BlBsW1oE2e6H6c7hyrVscXHy7SFnpnyBP10bmNTKRlk%2F2hLaeTG3hsKmbSUF4kiBsExzIk9uzQf%2B6qmYaa%2BdbGcmfRdR61hzgu2Ks1gNsTQWSf2rWT3zo%2BI4fJoV%2F9RmrZPYK2laCMArKRjuYiMF2pu7w6zG%2B%2BW0U6zXKWKEOGr0Qx%2BpxHelM4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221122T221624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXABKGUGP2Y3B2MVL%2F20221122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=781da0129f6cbb8e5db5588d4bb95210f7743cbb58ca55c23c845b385bc5eff6",
  },
  {
    id: "Perc",
    letter: "A",
    src: "https://mike-lightz-beat-machine-sounds.s3.us-east-1.amazonaws.com/load/MURDA_rim_shade.wav?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCID%2Bu1ABcL%2FZuTaPilAuiZhgLkb1sbHtrwMW4rWECtmiCAiEA5a6PIfh0LGBI0MRsSb%2FpxIgcgBOeg97afcVM9UrAhbAq7QIIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0ODExMjQ4NTIxMjciDDDPwDuv69333YUSZyrBAiEkcP06Q8u9%2BKXbGY%2FKb5i6dTmPVYEWfkR%2FNQoE9fab7X6Wwm1jWEQ4hgLU5PE7qut97zzD1Qng6wsjFI1ZmWXz5qkFQIBy1YRClAfNj8cqt03cVPQVWtPn6d89ZP648OoI5g3PInNRs6QHsXjME9o%2FZPUaNLP5yZuxDXQYaR9KA5SzB1JUUJFVL%2F7hBTDd99WwsbQ0lh3iwo1isz90Xko90izY4%2FFzPeaOSaCbnJzC9665Qd%2FYQDXuam3UdhnawdiSRdXTJl1hx7jbe9LljfDR%2FnScTEuRNo6oxyp5duIDIGXB2AMpNb4KwqUz%2BHOJz5GrdIuSEPA3WBp%2FzTjvHjKY12O4WVmsgtg15Ii8NF2Oxm1ofWTi1I4XEakus0mIrThQs%2F3XfpWAkKEgSBlZXvTfxCAuVnq%2FOv%2B69mup9OkBBDCthPWbBjqzAlc%2BahWNnLUIlYCFZHJezthuCl%2BYNh8lf2mdxUUSzMdq9pkY%2Bmi91PlyouOfXj11fXZZ8YFXcMz0P0bgBB7X0OxxN1QdtCYafv1vI5T0Gx9frshXyEaH0OktwYGFPK8xd4frs6WX%2B5AXL5BNirIqm03ezmlhPkClNlY1lpwy8sZ4Mk5HeZQXKA7qzt3QA4ReTQ%2F5afMyxGMgSwOTrPaCge6eUc1m3ERxdYhQE%2BlBsW1oE2e6H6c7hyrVscXHy7SFnpnyBP10bmNTKRlk%2F2hLaeTG3hsKmbSUF4kiBsExzIk9uzQf%2B6qmYaa%2BdbGcmfRdR61hzgu2Ks1gNsTQWSf2rWT3zo%2BI4fJoV%2F9RmrZPYK2laCMArKRjuYiMF2pu7w6zG%2B%2BW0U6zXKWKEOGr0Qx%2BpxHelM4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221122T221448Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXABKGUGP2Y3B2MVL%2F20221122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=77bf74038ec39dc44f1846801cb1722eecb322f37610fa62cc0d38a60212c907",
  },
  {
    id: "Clap",
    letter: "S",
    src: "https://mike-lightz-beat-machine-sounds.s3.us-east-1.amazonaws.com/load/Clap_Wheels.wav?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCID%2Bu1ABcL%2FZuTaPilAuiZhgLkb1sbHtrwMW4rWECtmiCAiEA5a6PIfh0LGBI0MRsSb%2FpxIgcgBOeg97afcVM9UrAhbAq7QIIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0ODExMjQ4NTIxMjciDDDPwDuv69333YUSZyrBAiEkcP06Q8u9%2BKXbGY%2FKb5i6dTmPVYEWfkR%2FNQoE9fab7X6Wwm1jWEQ4hgLU5PE7qut97zzD1Qng6wsjFI1ZmWXz5qkFQIBy1YRClAfNj8cqt03cVPQVWtPn6d89ZP648OoI5g3PInNRs6QHsXjME9o%2FZPUaNLP5yZuxDXQYaR9KA5SzB1JUUJFVL%2F7hBTDd99WwsbQ0lh3iwo1isz90Xko90izY4%2FFzPeaOSaCbnJzC9665Qd%2FYQDXuam3UdhnawdiSRdXTJl1hx7jbe9LljfDR%2FnScTEuRNo6oxyp5duIDIGXB2AMpNb4KwqUz%2BHOJz5GrdIuSEPA3WBp%2FzTjvHjKY12O4WVmsgtg15Ii8NF2Oxm1ofWTi1I4XEakus0mIrThQs%2F3XfpWAkKEgSBlZXvTfxCAuVnq%2FOv%2B69mup9OkBBDCthPWbBjqzAlc%2BahWNnLUIlYCFZHJezthuCl%2BYNh8lf2mdxUUSzMdq9pkY%2Bmi91PlyouOfXj11fXZZ8YFXcMz0P0bgBB7X0OxxN1QdtCYafv1vI5T0Gx9frshXyEaH0OktwYGFPK8xd4frs6WX%2B5AXL5BNirIqm03ezmlhPkClNlY1lpwy8sZ4Mk5HeZQXKA7qzt3QA4ReTQ%2F5afMyxGMgSwOTrPaCge6eUc1m3ERxdYhQE%2BlBsW1oE2e6H6c7hyrVscXHy7SFnpnyBP10bmNTKRlk%2F2hLaeTG3hsKmbSUF4kiBsExzIk9uzQf%2B6qmYaa%2BdbGcmfRdR61hzgu2Ks1gNsTQWSf2rWT3zo%2BI4fJoV%2F9RmrZPYK2laCMArKRjuYiMF2pu7w6zG%2B%2BW0U6zXKWKEOGr0Qx%2BpxHelM4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221122T221335Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXABKGUGP2Y3B2MVL%2F20221122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3243899787744372e0a5bb84609eb97eb9c17f09e5959cacc5ccb2ce1accbd5e",
  },
  {
    id: "Open-HH",
    letter: "D",
    src: "https://mike-lightz-beat-machine-sounds.s3.us-east-1.amazonaws.com/load/HHo_Wheels1.wav?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCID%2Bu1ABcL%2FZuTaPilAuiZhgLkb1sbHtrwMW4rWECtmiCAiEA5a6PIfh0LGBI0MRsSb%2FpxIgcgBOeg97afcVM9UrAhbAq7QIIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0ODExMjQ4NTIxMjciDDDPwDuv69333YUSZyrBAiEkcP06Q8u9%2BKXbGY%2FKb5i6dTmPVYEWfkR%2FNQoE9fab7X6Wwm1jWEQ4hgLU5PE7qut97zzD1Qng6wsjFI1ZmWXz5qkFQIBy1YRClAfNj8cqt03cVPQVWtPn6d89ZP648OoI5g3PInNRs6QHsXjME9o%2FZPUaNLP5yZuxDXQYaR9KA5SzB1JUUJFVL%2F7hBTDd99WwsbQ0lh3iwo1isz90Xko90izY4%2FFzPeaOSaCbnJzC9665Qd%2FYQDXuam3UdhnawdiSRdXTJl1hx7jbe9LljfDR%2FnScTEuRNo6oxyp5duIDIGXB2AMpNb4KwqUz%2BHOJz5GrdIuSEPA3WBp%2FzTjvHjKY12O4WVmsgtg15Ii8NF2Oxm1ofWTi1I4XEakus0mIrThQs%2F3XfpWAkKEgSBlZXvTfxCAuVnq%2FOv%2B69mup9OkBBDCthPWbBjqzAlc%2BahWNnLUIlYCFZHJezthuCl%2BYNh8lf2mdxUUSzMdq9pkY%2Bmi91PlyouOfXj11fXZZ8YFXcMz0P0bgBB7X0OxxN1QdtCYafv1vI5T0Gx9frshXyEaH0OktwYGFPK8xd4frs6WX%2B5AXL5BNirIqm03ezmlhPkClNlY1lpwy8sZ4Mk5HeZQXKA7qzt3QA4ReTQ%2F5afMyxGMgSwOTrPaCge6eUc1m3ERxdYhQE%2BlBsW1oE2e6H6c7hyrVscXHy7SFnpnyBP10bmNTKRlk%2F2hLaeTG3hsKmbSUF4kiBsExzIk9uzQf%2B6qmYaa%2BdbGcmfRdR61hzgu2Ks1gNsTQWSf2rWT3zo%2BI4fJoV%2F9RmrZPYK2laCMArKRjuYiMF2pu7w6zG%2B%2BW0U6zXKWKEOGr0Qx%2BpxHelM4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221122T221423Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXABKGUGP2Y3B2MVL%2F20221122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=929b913fdd8682b3f269c528f3b7c91afb3afdf06da9df74e315ef0304e3d46e",
  },
  {
    id: "Kick",
    letter: "Z",
    src: "https://mike-lightz-beat-machine-sounds.s3.us-east-1.amazonaws.com/load/BD_BetterHome1.wav?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCID%2Bu1ABcL%2FZuTaPilAuiZhgLkb1sbHtrwMW4rWECtmiCAiEA5a6PIfh0LGBI0MRsSb%2FpxIgcgBOeg97afcVM9UrAhbAq7QIIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0ODExMjQ4NTIxMjciDDDPwDuv69333YUSZyrBAiEkcP06Q8u9%2BKXbGY%2FKb5i6dTmPVYEWfkR%2FNQoE9fab7X6Wwm1jWEQ4hgLU5PE7qut97zzD1Qng6wsjFI1ZmWXz5qkFQIBy1YRClAfNj8cqt03cVPQVWtPn6d89ZP648OoI5g3PInNRs6QHsXjME9o%2FZPUaNLP5yZuxDXQYaR9KA5SzB1JUUJFVL%2F7hBTDd99WwsbQ0lh3iwo1isz90Xko90izY4%2FFzPeaOSaCbnJzC9665Qd%2FYQDXuam3UdhnawdiSRdXTJl1hx7jbe9LljfDR%2FnScTEuRNo6oxyp5duIDIGXB2AMpNb4KwqUz%2BHOJz5GrdIuSEPA3WBp%2FzTjvHjKY12O4WVmsgtg15Ii8NF2Oxm1ofWTi1I4XEakus0mIrThQs%2F3XfpWAkKEgSBlZXvTfxCAuVnq%2FOv%2B69mup9OkBBDCthPWbBjqzAlc%2BahWNnLUIlYCFZHJezthuCl%2BYNh8lf2mdxUUSzMdq9pkY%2Bmi91PlyouOfXj11fXZZ8YFXcMz0P0bgBB7X0OxxN1QdtCYafv1vI5T0Gx9frshXyEaH0OktwYGFPK8xd4frs6WX%2B5AXL5BNirIqm03ezmlhPkClNlY1lpwy8sZ4Mk5HeZQXKA7qzt3QA4ReTQ%2F5afMyxGMgSwOTrPaCge6eUc1m3ERxdYhQE%2BlBsW1oE2e6H6c7hyrVscXHy7SFnpnyBP10bmNTKRlk%2F2hLaeTG3hsKmbSUF4kiBsExzIk9uzQf%2B6qmYaa%2BdbGcmfRdR61hzgu2Ks1gNsTQWSf2rWT3zo%2BI4fJoV%2F9RmrZPYK2laCMArKRjuYiMF2pu7w6zG%2B%2BW0U6zXKWKEOGr0Qx%2BpxHelM4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221122T221303Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXABKGUGP2Y3B2MVL%2F20221122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=56e6351be49615688890410f4e2ab9c6e1fdac49d73c79d26ae31c11fa3d9774",
  },
  {
    id: "Snare",
    letter: "X",
    src: "https://mike-lightz-beat-machine-sounds.s3.us-east-1.amazonaws.com/load/SD_Rubicon.wav?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCID%2Bu1ABcL%2FZuTaPilAuiZhgLkb1sbHtrwMW4rWECtmiCAiEA5a6PIfh0LGBI0MRsSb%2FpxIgcgBOeg97afcVM9UrAhbAq7QIIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0ODExMjQ4NTIxMjciDDDPwDuv69333YUSZyrBAiEkcP06Q8u9%2BKXbGY%2FKb5i6dTmPVYEWfkR%2FNQoE9fab7X6Wwm1jWEQ4hgLU5PE7qut97zzD1Qng6wsjFI1ZmWXz5qkFQIBy1YRClAfNj8cqt03cVPQVWtPn6d89ZP648OoI5g3PInNRs6QHsXjME9o%2FZPUaNLP5yZuxDXQYaR9KA5SzB1JUUJFVL%2F7hBTDd99WwsbQ0lh3iwo1isz90Xko90izY4%2FFzPeaOSaCbnJzC9665Qd%2FYQDXuam3UdhnawdiSRdXTJl1hx7jbe9LljfDR%2FnScTEuRNo6oxyp5duIDIGXB2AMpNb4KwqUz%2BHOJz5GrdIuSEPA3WBp%2FzTjvHjKY12O4WVmsgtg15Ii8NF2Oxm1ofWTi1I4XEakus0mIrThQs%2F3XfpWAkKEgSBlZXvTfxCAuVnq%2FOv%2B69mup9OkBBDCthPWbBjqzAlc%2BahWNnLUIlYCFZHJezthuCl%2BYNh8lf2mdxUUSzMdq9pkY%2Bmi91PlyouOfXj11fXZZ8YFXcMz0P0bgBB7X0OxxN1QdtCYafv1vI5T0Gx9frshXyEaH0OktwYGFPK8xd4frs6WX%2B5AXL5BNirIqm03ezmlhPkClNlY1lpwy8sZ4Mk5HeZQXKA7qzt3QA4ReTQ%2F5afMyxGMgSwOTrPaCge6eUc1m3ERxdYhQE%2BlBsW1oE2e6H6c7hyrVscXHy7SFnpnyBP10bmNTKRlk%2F2hLaeTG3hsKmbSUF4kiBsExzIk9uzQf%2B6qmYaa%2BdbGcmfRdR61hzgu2Ks1gNsTQWSf2rWT3zo%2BI4fJoV%2F9RmrZPYK2laCMArKRjuYiMF2pu7w6zG%2B%2BW0U6zXKWKEOGr0Qx%2BpxHelM4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221122T221559Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXABKGUGP2Y3B2MVL%2F20221122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=419cda22fee4a19635a55d3a92db78b0d812fe100ea19a91a801c84ad9cb0fce",
  },
  {
    id: "Closed-HH",
    letter: "C",
    src: "https://mike-lightz-beat-machine-sounds.s3.us-east-1.amazonaws.com/load/HH_Fortuna2.wav?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCID%2Bu1ABcL%2FZuTaPilAuiZhgLkb1sbHtrwMW4rWECtmiCAiEA5a6PIfh0LGBI0MRsSb%2FpxIgcgBOeg97afcVM9UrAhbAq7QIIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0ODExMjQ4NTIxMjciDDDPwDuv69333YUSZyrBAiEkcP06Q8u9%2BKXbGY%2FKb5i6dTmPVYEWfkR%2FNQoE9fab7X6Wwm1jWEQ4hgLU5PE7qut97zzD1Qng6wsjFI1ZmWXz5qkFQIBy1YRClAfNj8cqt03cVPQVWtPn6d89ZP648OoI5g3PInNRs6QHsXjME9o%2FZPUaNLP5yZuxDXQYaR9KA5SzB1JUUJFVL%2F7hBTDd99WwsbQ0lh3iwo1isz90Xko90izY4%2FFzPeaOSaCbnJzC9665Qd%2FYQDXuam3UdhnawdiSRdXTJl1hx7jbe9LljfDR%2FnScTEuRNo6oxyp5duIDIGXB2AMpNb4KwqUz%2BHOJz5GrdIuSEPA3WBp%2FzTjvHjKY12O4WVmsgtg15Ii8NF2Oxm1ofWTi1I4XEakus0mIrThQs%2F3XfpWAkKEgSBlZXvTfxCAuVnq%2FOv%2B69mup9OkBBDCthPWbBjqzAlc%2BahWNnLUIlYCFZHJezthuCl%2BYNh8lf2mdxUUSzMdq9pkY%2Bmi91PlyouOfXj11fXZZ8YFXcMz0P0bgBB7X0OxxN1QdtCYafv1vI5T0Gx9frshXyEaH0OktwYGFPK8xd4frs6WX%2B5AXL5BNirIqm03ezmlhPkClNlY1lpwy8sZ4Mk5HeZQXKA7qzt3QA4ReTQ%2F5afMyxGMgSwOTrPaCge6eUc1m3ERxdYhQE%2BlBsW1oE2e6H6c7hyrVscXHy7SFnpnyBP10bmNTKRlk%2F2hLaeTG3hsKmbSUF4kiBsExzIk9uzQf%2B6qmYaa%2BdbGcmfRdR61hzgu2Ks1gNsTQWSf2rWT3zo%2BI4fJoV%2F9RmrZPYK2laCMArKRjuYiMF2pu7w6zG%2B%2BW0U6zXKWKEOGr0Qx%2BpxHelM4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221122T221355Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXABKGUGP2Y3B2MVL%2F20221122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1ce37a17b85551e44af04bd60a3d961e6ed5727493afffb21904da91b0be7728",
  },
];

class DrumPad extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener("Keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
  };

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  };

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <p>{this.props.letter}</p>
        <audio
          ref={(ref) => (this.audio = ref)}
          id={this.props.letter}
          className="clip"
          src={this.props.src}
        ></audio>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
    };
  }

  handleDisplay = (display) => this.setState({ display });

  render() {
    return (
      <div>
        <h1>Mike Lightz MPC</h1>
        <div id="container">
          <div id="drum-machine">
            <div id="drum-pads">
              {buttons.map((button) => (
                <DrumPad
                  id={button.id}
                  letter={button.letter}
                  src={button.src}
                  handleDisplay={this.handleDisplay}
                />
              ))}
            </div>
            <div id="container-two">
              <div id="display">{this.state.display}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
