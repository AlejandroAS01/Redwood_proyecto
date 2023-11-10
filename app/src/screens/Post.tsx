import { View,Text } from "react-native";
import { usePostQuery } from "../api/types";
import { PostProps } from "../navigation";

function PostScreen({ route }: PostProps) {
  const { id } = route.params
  const { data, loading } = usePostQuery({ variables: { id } })

  if (loading){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>
        {data?.post?.title}
      </Text>
      <Text>
        {data?.post?.body}
      </Text>
      <Text>
        {data?.post?.createdAt}
      </Text>
      <Text>
        {data?.post?.user.name}
      </Text>
    </View>
  );
}

export default PostScreen