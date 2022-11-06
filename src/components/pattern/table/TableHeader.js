/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import colorList from "../../../assets/colorList";
import fontList from "../../../assets/fontList";

const cssList = {
    th: {
        ...fontList.roboto.regular["12"],
        color: colorList.grayscale["000"],
        padding: "10px 12px",
        textAlign: "start",
    }
}

export function SoloTableHeader({newCss = {}}) {
    return (
        <div css={css({
            background: colorList.semantic.card,
            width: "676px",
            height: "32px",
            ...newCss
        })}>
            {
                <tr css={css({
                    width: "676px",
                    height: "32px",
                })}>
                    <th css={css({
                        ...cssList.th,
                        textAlign: "center",
                        borderRadius: "4px 4px 0px 0px",
                        width: "676px",
                    })}>Rank
                    </th>
                </tr>
            }
        </div>
    );
}

export function DuoTableHeader({newCss = {}}) {
    return (
        <thead css={css({
            background: colorList.semantic.card,
            width: "676px",
            height: "32px",
            ...newCss
        })}>
        {
            <tr css={css({
                width: "676px",
                height: "32px",
            })}>
                <th css={css({
                    ...cssList.th,
                    borderRadius: "4px 0px 0px 0px",
                    width: "150px",
                })}>Rank
                </th>
                <th css={css({
                    ...cssList.th,
                    width: "238px",
                })}>Champion
                </th>
                <th css={css({
                    ...cssList.th,
                    width: "288px",
                    borderRadius: "0px 4px 0px 0px",
                })}>Win Rate
                </th>
            </tr>
        }
        </thead>
    )
}
