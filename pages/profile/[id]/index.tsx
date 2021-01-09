import React, {Component} from 'react';
import {NextPageContext} from "next";
import {getApolloClient} from "../../../lib/apollo";
import {gql} from "apollo-boost";
import {NextSeo} from "next-seo";

class Profile extends Component<any> {
    render() {
        return (
            <NextSeo title={this.props.user.tag} openGraph={{
                images: [
                    {
                        url: this.props.user.avatarURL,
                    }
                ],
                title: this.props.user.tag,
                description: `${this.props.user.tag}님의 프로필입니다.`
            }} description={`${this.props.user.tag}님의 프로필입니다.`}>
                {this.props.user.tag}
            </NextSeo>
        );
    }
}

export async function getServerSideProps(ctx: NextPageContext) {
    const apollo = getApolloClient(ctx)
    const data = await apollo.query({
        query: gql`
        query($id: String!) {
            profile(id: $id) {
                id
                tag
                avatarURL
                admin
            }
        }
        `,
        variables: {
            id: ctx.query.id
        }
    })
    if (!data.data.profile) {
        return {
            props: {
                error: 404
            }
        }
    }
    return {props: {user: data.data.profile}}
}

export default Profile;